import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_4xnqp6vz_4eoWi8dYy51jLPPqniZbSPSD");
const myEmail = process.env.MY_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [myEmail],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Obrigado por entrar em contato!</p>
          <p>Mensagem enviada do email {email}:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}