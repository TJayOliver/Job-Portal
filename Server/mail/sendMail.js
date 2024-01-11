import { transporter } from '../mail/mail.config.js';

export const sendMail = async (receiver, subject, body) => {
    try {
        const send =  await transporter.sendMail({
            from: {
                name : 'Future Forte',
                address : '<no-reply@futureforte.com'
            },
            to: receiver,
            replyTo : '<no-reply@futureforte.com',
            subject: subject,
            html: body
        });
        console.log('Mail sent',send.messageId)
    } catch (error) {
        throw error;
    }
}



