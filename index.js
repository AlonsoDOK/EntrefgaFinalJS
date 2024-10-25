// Lista de continentes y países //
const continentes = {
    "Asia": ["Afganistán", "Arabia Saudita", "India", "Japón"],
    "Europa": ["Alemania", "Francia", "España", "Italia"],
    "América": ["Argentina", "Estados Unidos", "Brasil", "Chile"],
    "África": ["Sudáfrica", "Egipto", "Nigeria", "Kenia"],
    "Oceanía": ["Australia", "Nueva Zelanda", "Fiyi", "Samoa"]
};

// Opciones de transporte y calores //
const transportes = [
    { medio: "Bicicleta", costo: 50 },
    { medio: "Moto", costo: 150 },
    { medio: "Bus", costo: 200 },
    { medio: "Avión", costo: 500 },
    { medio: "Barco", costo: 1000 },
    { medio: "Cohete espacial", costo: 5000 }
];

// Opciones animales y valores //
const animales = [
    { animal: "Gato", costo: 5 },
    { animal: "Perro", costo: 15 },
    { animal: "Loro", costo: 7 },
    { animal: "Tigre", costo: 700 },
    { animal: "Caballo", costo: 1200 },
    { animal: "Elefante", costo: 5000 }
];

// Función continente y país aleatorio //
function mostrarPaisItinerante() {
    const continentesKeys = Object.keys(continentes);
    const continenteAzar = continentesKeys[Math.floor(Math.random() * continentesKeys.length)];
    const paises = continentes[continenteAzar];
    const paisAzar = paises[Math.floor(Math.random() * paises.length)];
    document.getElementById('Resultado').innerText = `Continente: ${continenteAzar} - País: ${paisAzar}`;
}

// Llenar opciones transporte y animales //
function llenarSelectores() {
    const selectTransporte = document.getElementById("selectTransporte");
    const selectAnimal = document.getElementById("selectAnimal");

    transportes.forEach((transporte) => {
        const option = document.createElement("option");
        option.value = transporte.costo;
        option.textContent = `${transporte.medio} - $${transporte.costo}`;
        option.dataset.medio = transporte.medio;
        selectTransporte.appendChild(option);
    });

    animales.forEach((animal) => {
        const option = document.createElement("option");
        option.value = animal.costo;
        option.textContent = `${animal.animal} - $${animal.costo}`;
        option.dataset.animal = animal.animal;
        selectAnimal.appendChild(option);
    });
}

// Función de llenado al cargar la página //
window.onload = llenarSelectores;