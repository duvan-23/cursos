var admin = require("firebase-admin");
var serviceAccount = require("./db/ecommerce-cdb38-firebase-adminsdk-81ffw-8ae1c98706.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
console.log("Conectado a firebase correctamente");

CrearUsuario();
async function CrearUsuario() {
    const db = admin.firestore();
    const query = db.collection("usuarios");
    try {
        let id = 2;
        let doc = await query.doc(id.toString());
        await doc.create({
            nombre: "Duvan1",
            apellido: "Caicedo1"
        });
        console.log("Usuario creado")
    } catch (error) {
        console.log(error);
    }
}