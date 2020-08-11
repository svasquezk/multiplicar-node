// requires
const fs = require('fs'); // Proyecto propio de Node
const { resolve } = require('path');
// const fs = require('express'); //Librerias que se instalan
// const fs = require('./fs'); // Lierrias o archivos del proyecto 

let listar = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!base || !limite) {
            reject(`Debe ingresar un número valido`);
            return;
        }
        if (!Number(base) || !Number(limite)) {
            reject(`Debe ingresar un valor númerico`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        return resolve(data);
    });
}


let crearArchivo = ((base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor '${base}' no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/tabla-${base}-al-${limite}.txt`)
        });
    });
});

module.exports = {
    crearArchivo,
    listar
}