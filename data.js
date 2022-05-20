
const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


//creo variabili elementi html
const containerIcon = document.getElementById("icone_container");
const containerSel =  document.getElementById("selettore_icone");


//creo addEventListener sul selettore
containerSel.addEventListener("change",filterArray);
 // imposto il valore iniziale del selettore su all
 containerSel.value = 'all';
 // stampo tutti gli elementi sulla pagina
 printElement(icone);


//funzione che va a filtrare gli elementi a seconda del value e crea una array con gli elementi, che poi vengono stampati 
function filterArray() {
	switch (containerSel.value) {
		    case 'animal':
			    const arrAnimal = icone.filter((element) => element.type === 'animal');
			    printElement(arrAnimal);
			    break;
			case 'vegetable':
				const arrVegetable = icone.filter((element) => element.type === 'vegetable');
				printElement(arrVegetable);
				break;
			case 'user':
				const arrUser = icone.filter((element) => element.type === 'user');
				printElement(arrUser);
				break;
		
	
		default:
			printElement(icone);
	}
	
}


//funzione che crea gli elementi html e aggiunge le classi che creano le icone.
function printElement(icone) {
	
	containerIcon.innerHTML = "";

	icone.forEach(element => {
		const card = document.createElement("div");
		card.classList.add("card");
		const icon = document.createElement("i");
		const nome = document.createElement("div");
		nome.classList.add("name");
		nome.innerText = element.name.toUpperCase();
		//unisci le classi per creare le icone 
		icon.classList.add(element.family);
		icon.classList.add(element.prefix + element.name);
		icon.classList.add(element.color);
		card.append(icon);
		card.append(nome);
		containerIcon.append(card);

	})

}