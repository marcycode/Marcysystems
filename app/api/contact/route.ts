import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, businessName, budget, timeline, message } = body

    // TODO: Integrate with your email service (SendGrid, Resend, etc.)
    // TODO: Add validation
    // TODO: Store in database/CRM if needed

    // Example: Send email using a service
    // await sendEmail({
    //   to: 'hello@marcysystems.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   body: `Name: ${name}\nEmail: ${email}\nBusiness: ${businessName}\nBudget: ${budget}\nTimeline: ${timeline}\nMessage: ${message}`
    // })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    )
  }
}

