function mostrar() {
    document.querySelector("h1").innerHTML = "Deu certo!";
}

//setTimeout(mostrar, 3000);
//console.log("Passou...");

let file = "https://6826766b397e48c913162ca5.mockapi.io/Animal";

fetch(file)
    .then(response => response.json())
    //.then(data => console.log(data[1].nome));
    .then(data => { 
        let ol = document.querySelector("ol");

        for (let animal of data) {
            ol.innerHTML += '<li>' + animal.id + ' - ' + animal.nome + ' - ' + '('+ animal.idade +') - ' + animal.raca + '</li>';
        }
    });

function cadastrar() {
    let animal = {
        "nome": "Mequillus Brutus",
        "idade": 5,
        "raca": "cat",
        "id": 51
    }

    fetch(file, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(animal)
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

    location.reload();
}
