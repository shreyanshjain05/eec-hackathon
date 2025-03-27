import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Define the structure of the request body
interface QueryRequest {
  email: string;
  query: string;
}

// Create a reusable transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Helper function to process query
function processQuery(query: string): string {
  // Implement your query processing logic here
  if (query.toLowerCase().includes('weather')) {
    return 'Sorry, I cannot provide real-time weather information.';
  }
  
  if (query.toLowerCase().includes('help')) {
    return 'I am here to assist you. Could you please provide more details about your query?';
  }
  
  return 'Thank you for your query. Our team will review and respond shortly.';
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Validate request body
    const { email, query }: QueryRequest = req.body;

    if (!email || !query) {
      return res.status(400).json({ 
        message: 'Email and query are required' 
      });
    }

    // Process the query
    const responseText = processQuery(query);

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: email,
      subject: 'Query Received - Automated Response',
      text: responseText,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Query Response</h2>
          <p>${responseText}</p>
          <hr>
          <small>This is an automated response. Please do not reply to this email.</small>
        </div>
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond to the API request
    res.status(200).json({ 
      message: 'Query processed successfully',
      responseText 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    // Handle different types of errors
    if (error instanceof Error) {
      res.status(500).json({ 
        message: 'Error processing query', 
        error: error.message 
      });
    } else {
      res.status(500).json({ 
        message: 'Unknown error occurred' 
      });
    }
  }
}

// Enable body parsing
export const config = {
  api: {
    bodyParser: true,
  },
}