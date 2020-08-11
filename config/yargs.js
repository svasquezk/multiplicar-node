const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        limite: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en comsola la tabla de multiplicar', { opts })
    .command('crear', 'Crea archivos con la tabla de multiplicar', { opts })
    .argv;

module.exports = {
    argv
}