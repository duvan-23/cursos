import twilio from 'twilio'

const accountSid = 'ACde04753ddf170f1c46d322d0785c4bf3'
const authToken = 'd451f536bf332d2785cd6e4c0caa630c'

const twilioClient = twilio(accountSid, authToken)

const numero = process.argv[2] || '+573107873745';
const mensaje = process.argv[3] ||'Este es un mensaje automatico!';

try{
    const message = await twilioClient.messages.create({
        body:mensaje,
        to: `whatsapp:${numero}`,
        from: 'whatsapp:+14155238886'
    });
    console.log(message)
}catch(err){
    console.log(err)
}


//node server.js +573107873745 "Hola Duvan"