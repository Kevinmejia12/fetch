let url = "https://swapi.dev/api/people"; //origen de los datos

//eventos para la pagina 
document.getElementById("btnsubmit").addEventListener("click", moreInfo);
var btnsubmit = document.getElementById("btnsubmit");
window.addEventListener("resize", resize);

function moreInfo() {
    fetch(url) //solicitud a la url
        .then(response => response.json()) //se resuelve la promesa y lo mete a response.json en este caso 
        .then(data => mostrarData(data.results)) //leemos el objeto data y concatenamos a una variable (data.results)
        .catch(error => console.log(error)) //si hay error mostramos con el catch


    const mostrarData = (data) => {
        let body = "" //declaramos una variable para despues llenarla
        for (let i = 0; i < data.length; i++) { //for para recorrer el array de los personajes de star wars en la  star wars api
            body += `<tr><td>${data[i].name}</td><td>${data[i].height}</td><td>${data[i].skin_color}</td><td>${data[i].gender}</td></th></tr>` //llenamos 4 td con los valores que hay dentro de data.results
        }
        document.getElementById("data").innerHTML = body; //lo construimos con innerhtml
    }
}