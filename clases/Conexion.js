const { Pool } = require("pg")

module.exports = class Conexion {
    
    constructor() {
        this._pool = new Pool({
            host: 'localhost',
            port: 5432,
            database: 'telefonos',
            user: 'postgres',
            password: 'postgres'
        })
        this.client = null
    }

    async conectar() {
        this.client = await this._pool.connect()
    }

    async desconectar() {
        await this.client.end()
    }
}