import nodemailer from 'nodemailer'

export default async (req, res) => {
  const { name, email, message } = req.body

  const transforter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    }
  })

  try {
    await transforter.sendMail({
      from: email,
      to: 'joshuaimalay@gmail.com',
      subject: `New mail from ${email}`,
      html: ` 
          ${name} wrote: <br /><br />
          ${message}
      `
    })

    // console.log('Message Sent!', mail.messageId)
  } catch (err) {
    console.log(err)
  }

  res.status(200).json(req.body)
}
