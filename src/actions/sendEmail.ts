import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../utils/email";
import ContactFormEmail from "../email/contact-form-email";

const resend = new Resend('re_fZ3jmFru_DLgcLKhu9cTLqoRv6PVf9kBv');


type TFormEmail = {
  senderEmail:string;
  message:string;
}
export const sendEmail = async ({senderEmail, message}: TFormEmail) => {


  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "amienulrana@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
