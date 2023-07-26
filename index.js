const Usuario = require("./clases/Usuario.js");


(async() => {
    const user = new Usuario()
    await user.crearTabla()


    const usuario1 = new Usuario(null, "operez","123456")
    const result1 = await usuario1.registrarUsuario()

    const usuario2 = new Usuario(null, "ngonzalez", "987654321")
    const result2 = await usuario2.registrarUsuario()


    console.log("Usuario1", result1.rows);
    console.log("Usuario2", result2.rows);
})()