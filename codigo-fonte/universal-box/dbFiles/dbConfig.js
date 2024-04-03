const config = {
    user: 'Administrador',
    password: '12345',
    server: 'GABRIEL',
    database: 'Universal Box',
    options:{
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 52358
}

module.exports = config;