import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(request) {
  try {
    // Parse the request body
    const { email } = await request.json();
    
    if (!email || !email.includes('@')) {
      return Response.json({ message: 'Valid email is required' }, { status: 400 });
    }

    // Validate credentials exist
    if (!process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_CLIENT_EMAIL) {
      throw new Error('Google credentials not configured');
    }

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
        universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
      },
      scopes: ['https://www.googleapis.com/auth/drive'],
    });

    const drive = google.drive({ version: 'v3', auth });

    // Grant access to the folder
    await drive.permissions.create({
      fileId: process.env.GOOGLE_DRIVE_FOLDER_ID,
      requestBody: {
        role: 'reader',
        type: 'user',
        emailAddress: email,
        sendNotificationEmail: true, // Add this to notify user
      },
    });

    return Response.json({ message: `Access granted to ${email}` }, { status: 200 });
  } catch (error) {
    console.error('Error granting access:', error);
    
    // More specific error messages
    let errorMessage = 'Failed to grant access';
    if (error.message.includes('invalid_grant')) {
      errorMessage = 'Authentication error - check service account credentials';
    } else if (error.message.includes('File not found')) {
      errorMessage = 'Google Drive folder not found';
    }
    
    return Response.json({ message: errorMessage }, { status: 500 });
  }
}
