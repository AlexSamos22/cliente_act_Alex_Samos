//Ejer1
let yo = {
    nombre: "Alex",
    apellidos: "Samos Muñoz",
    direccion: "C\\Alamo 15",
    masInfo:{
        altura: 160,
        peso: 64,
        mascotas: "Perro"
    }
};

JSON.stringify(yo);

let texto = `{${Object.entries(yo).map(([llave, valor]) => {
    if (typeof valor === 'object') { //se compreba el valor de una de las llaves del obj principal es otro obj
        let subTexto = `{${Object.entries(valor).map(([subLlave, subValor]) => {
            return `"${subLlave}":${subValor}`;
        }).join(',')}}`;
        return `"${llave}":${subTexto}`;
    } else {
        return `"${llave}":${typeof valor === 'string' ? `"${valor}"` : valor}`; //El if es para darle el formato JSON en el que las cadenas van con "" y las numeros no
    }
}).join(',')}}`;

//Ejer2
let yoTexto =` {
    nombre: "Alex",
    apellidos: "Samos Muñoz",
    direccion: "C\\Alamo 15",
    masInfo:{
        altura: 160,
        peso: 64,
        mascotas: "Perro"
    }
}`;

JSON.parse(yoTexto);
