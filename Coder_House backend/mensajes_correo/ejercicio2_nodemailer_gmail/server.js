import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: 'duvancaicedo20@gmail.com',
    pass: 'graygobzubvdnkvv',
  },
})

const asunto = process.argv[2] || 'sin asunto'
const mensaje = process.argv[3] || 'sin mensaje'

console.log('Enviando mensaje...')
const info = await transporter.sendMail({
  from: 'duvancaicedo20@gmail.com',
  to: ['duvancaicedo20@gmail.com'],
  subject: asunto,
  text: mensaje,
  attachments: [
    {
      path: './grogu.jpg'
    }
  ]
})

console.log('Mensaje enviado', info)
//node server.js "prueba" "contenido prueba"