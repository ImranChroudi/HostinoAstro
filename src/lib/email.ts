import * as brevo from '@getbrevo/brevo';

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  "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"
);

export async function sendEmail({
  to,
  subject,
  htmlContent,
  textContent,
  senderName = "Hostino",
  senderEmail = "chroudiimran@gmail.com"
}: {
  to: string;
  subject: string;
  htmlContent: string;
  textContent: string;
  senderName?: string;
  senderEmail?: string;
}) {
  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = htmlContent;
    sendSmtpEmail.textContent = textContent;
    sendSmtpEmail.sender = { name: senderName, email: senderEmail };
    sendSmtpEmail.to = [{ email: to }];

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return { success: true, data: response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
}