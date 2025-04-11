import { google } from 'googleapis';

// Initialize Google Auth
const auth = new google.auth.GoogleAuth({
  credentials: {
    type: process.env.GOOGLE_TYPE,
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    auth_uri: process.env.GOOGLE_AUTH_URI,
    token_uri: process.env.GOOGLE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
  },
  scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file'
  ],
});

const drive = google.drive({ version: 'v3', auth });

export async function POST(request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return Response.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    if (!folderId) {
      throw new Error("Google Drive folder ID not configured");
    }

    // Verify folder exists
    await drive.files.get({
      fileId: folderId,
      fields: 'id,name'
    });

    // Grant access
    const result = await drive.permissions.create({
      fileId: folderId,
      requestBody: {
        role: 'reader',
        type: 'user',
        emailAddress: email,
        sendNotificationEmail: true,
      },
      fields: 'id',
    });

    console.log(`Access granted to ${email}. Permission ID: ${result.data.id}`);

    return Response.json(
      { message: `Access granted to ${email}` },
      { status: 200 }
    );

  } catch (error) {
    console.error('Drive API Error:', error);

    let errorMessage = "Failed to grant access";
    let statusCode = 500;

    if (error.response?.data?.error) {
      errorMessage = error.response.data.error.message || errorMessage;
      statusCode = error.response.data.error.code || statusCode;
    }

    return Response.json(
      { 
        error: errorMessage,
        details: error.message,
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
      },
      { status: statusCode }
    );
  }
}
