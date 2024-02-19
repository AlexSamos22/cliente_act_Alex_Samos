/*
    Create a website that allows you to select a Marvel character and, once selected, presents information about comics they star in and 
    comics they appear with more characters. It must allow to click on these comics or characters to get more information about them. 
    To achieve it, you must use marvel API
*/

const PUBLIC_API_KEY = "641ab2f2119bbda87e74213dedd42693";
const PRIVATE_API_KEY = "f33436c57308fe959755fb89a76493a637bfde6e";
const API_URL = "https://gateway.marvel.com/v1/public/characters";

const tiempo = new Date().getTime();
const hash = CryptoJS.MD5(tiempo+PRIVATE_API_KEY+PUBLIC_API_KEY).toString();
const url = `${API_URL}?ts=${tiempo}&apikey=${PUBLIC_API_KEY}&hash=${hash}`;

document.addEventListener("DOMContentLoaded", () => {
    fetch(url) 
        .then(respuesta => respuesta.json())
        .then(datos => {
            let personajes = document.getElementById("personajes");

            datos.data.results.forEach(heroe => {
                let img = document.createElement("img");
                img.src = `${heroe.thumbnail.path}/portrait_xlarge.${heroe.thumbnail.extension}`;

                img.addEventListener("click", () =>{
                    const comicsUrl = `${API_URL}/${heroe.id}/comics?ts=${tiempo}&apikey=${PUBLIC_API_KEY}&hash=${hash}`;
                   fetch(comicsUrl).then(respuesta => respuesta.json())
                   .then(datos=>{
                        let comics = document.getElementById("comic");
                        comics.innerHTML = "";

                        datos.data.results.forEach(comic => {
                            let img = document.createElement('img');
                            img.src = `${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`;
                            img.alt = comic.title;

                            img.src = `${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`;
                            img.alt = comic.title;
            
                            let titulo = document.createElement('h3');
                            titulo.textContent = comic.title;
            
                            let comicContenedor = document.createElement('div');
                            comicContenedor.className = 'comic-item';
                            comicContenedor.appendChild(img);
                            comicContenedor.appendChild(titulo);

            
                            const tituloComic = document.getElementById("nombre-heroe");
                            tituloComic.innerHTML = '';
                            tituloComic.textContent = "Comics de : " + heroe.name;
            
                            comics.appendChild(comicContenedor);
                        })
                   })
                });

                let nombreHeroe = document.createElement("h1");
                nombreHeroe.textContent = heroe.name;

                let article = document.createElement("article");
                article.appendChild(img);
                article.appendChild(nombreHeroe);
                
                personajes.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});
