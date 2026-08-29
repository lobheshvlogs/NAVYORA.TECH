import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, services, budget, timeline, preferredContactMethod, description } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Validation Error: Full name is required.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Validation Error: Valid email address is required.' },
        { status: 400 }
      );
    }

    if (!description || typeof description !== 'string' || description.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Validation Error: Please provide a detailed project description (minimum 10 characters).' },
        { status: 400 }
      );
    }

    // Input sanitization
    const sanitizedPayload = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      company: (company || '').trim().slice(0, 100),
      services: Array.isArray(services) ? services.slice(0, 10) : [],
      budget: (budget || '').slice(0, 50),
      timeline: (timeline || '').slice(0, 50),
      preferredContactMethod: (preferredContactMethod || 'Email').slice(0, 30),
      description: description.trim().slice(0, 2000),
      submittedAt: new Date().toISOString(),
    };

    // Log payload safely (or integrate email dispatch service like Resend/Sendgrid via env vars)
    console.log('[LEAD_INTAKE_SUCCESS]:', sanitizedPayload);

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully. An engineer will follow up within 24 hours.',
      inquiryId: `NAVYORA-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (err) {
    console.error('[CONTACT_API_ERROR]:', err);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}
