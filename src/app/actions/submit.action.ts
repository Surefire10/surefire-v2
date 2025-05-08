"use server";
import { Resend } from "resend";

export async function submitAction(formValues: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const key = process.env.RESEND_API_KEY;
  const resend = new Resend(key);
  try {
    const response = await resend.emails.send({
      from: "ther.dev",
      to: "yarakhairat10@gmail.com",
      subject: formValues.subject,
      html: `<p>From: ${formValues.name} </p> <p>Email: ${formValues.email} </p> <p>${formValues.message}</p>`,
    });
    if (response.data) return { message: "success!", statusCode: 200 };
    return { error: "failed to send message :(", statusCode: 400 };
  } catch (error: any) {}
}
