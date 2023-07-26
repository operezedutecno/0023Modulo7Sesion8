const Usuario = require("./clases/Usuario.js");


(async() => {
    const user = new Usuario()
    await user.crearTabla()

    // Registro de Usuarios
    // const usuario1 = new Usuario(null, "operez","123456")
    // const result1 = await usuario1.registrarUsuario()

    // const usuario2 = new Usuario(null, "ngonzalez", "987654321")
    // const result2 = await usuario2.registrarUsuario()

    // console.log("Usuario1", result1.rows);
    // console.log("Usuario2", result2.rows);
    // Fin Registro de Usuarios


    // Búsqueda de Usuario por Id
    const registro = await user.busqueda(2) // Si se omite el parámetro para el método búsqueda muestra el listado
    console.log(registro.rows);


    // Listado de Usuarios
    // const registros = await user.listarUsuarios()
    // console.table(registros.rows);
})()