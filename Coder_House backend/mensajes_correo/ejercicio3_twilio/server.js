import twilio from 'twilio'

const accountSid = 'ACde04753ddf170f1c46d322d0785c4bf3'
const authToken = 'd451f536bf332d2785cd6e4c0caa630c'

const twilioClient = twilio(accountSid, authToken)

const from = '+14705249066'
const to = '+573107873745'
const body = 'Hello from Twilio!'

const info = await twilioClient.messages.create({body, from, to})

console.log(info)