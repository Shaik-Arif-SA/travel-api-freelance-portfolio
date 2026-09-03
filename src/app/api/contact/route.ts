import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/schemas/contact_form';

export async function POST(request: NextRequest) {
  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json(
      { message: 'Contact form is not configured yet. Please try again later.' },
      { status: 503 }
    );
  }

  const payload = await request.json();
  const parsed = contactFormSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? 'Please check your details.' },
      { status: 400 }
    );
  }
  if (parsed.data.website_hp) {
    return NextResponse.json({ message: 'Unable to process this request.' }, { status: 400 });
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...parsed.data,
      _subject: `New travel technology enquiry from ${parsed.data.name}`
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: 'The enquiry could not be sent. Please try again or email directly.' },
      { status: 502 }
    );
  }
  return NextResponse.json({ message: 'Thanks — your enquiry is on its way.' });
}
