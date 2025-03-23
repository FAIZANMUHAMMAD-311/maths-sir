import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

// Construct the service account JSON object from environment variables
const credentials = {
  type: process.env.GOOGLE_TYPE,
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Fix newlines
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: process.env.GOOGLE_AUTH_URI,
  token_uri: process.env.GOOGLE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
  universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
};

// Authenticate using the service account
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/drive'],
});

const drive = google.drive({ version: 'v3', auth });

export async function POST(request) {
  try {
    // Parse the request body
    const { email } = await request.json();
    console.log(email);
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID; // Get folder ID from environment variable

    // Validate input
    if (!email) {
      return new Response(JSON.stringify({ message: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // List files in the folder (optional, for debugging)
    const response = await drive.files.list({
      q: `'${process.env.GOOGLE_DRIVE_FOLDER_ID}' in parents`,
    });
    console.log(response.data.files);

    // Grant access to the folder
    await drive.permissions.create({
      fileId: folderId,
      requestBody: {
        role: 'reader', // Change to 'writer' if edit access is needed
        type: 'user',
        emailAddress: email,
      },
    });

    return new Response(JSON.stringify({ message: `Access granted to ${email}` }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error granting access:', error);
    return new Response(JSON.stringify({ message: 'Failed to grant access' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
