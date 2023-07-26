const Conexion = require("./Conexion.js")

module.exports = class Usuario extends Conexion {
    constructor(id, usuario, contrasena) {
        // Llamado al constructor de la clase Conexión
        super()

        // Asignación de valores a los atributos de la clase Usuario
        this._id = id
        this._usuario = usuario
        this._contrasena = contrasena
    }

    async crearTabla() {
        const sql = `
            CREATE TABLE IF NOT EXISTS usuarios(
                id SERIAL PRIMARY KEY,
                usuario VARCHAR NOT NULL,
                contrasena VARCHAR NOT NULL,
                UNIQUE(usuario)
            )
        `
        await this.conectar()
        await this.client.query(sql)
        await this.desconectar()
    }

    async registrarUsuario() {
        const sql = {
            text: "INSERT INTO usuarios(usuario, contrasena) VALUES($1, $2) RETURNING *",
            values: [this._usuario, this._contrasena]
        }
        await this.conectar()
        const registro = await this.client.query(sql)
        await this.desconectar()
        return registro
    }
}