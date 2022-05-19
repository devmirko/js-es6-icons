
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


//Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

const containerIcon = document.getElementById("icone_container");
const containerSel =  document.getElementById("selettore_icone");
const scelta =  containerSel.value;


insertBox();

containerSel.addEventListener("change",
function () {

	// containerIcon.innerHTML = "";

	if (scelta == "all") {
		insertBox();
	} else {
		insertFilterBox()
	}
}
)
//creo una funzione che genera le card
function generatorBox (icons) {
     return `
	 <div class="box">
		 <i class="${icons.family} ${icons.prefix}${icons.name}" style="color: ${icons.color};"></i>
		 <div class="name">${icons.name}</div>
	 </div>
	 `;
	 }

	 //inserisci le box

	 function insertBox() {
		 icone.forEach((icon) => {
			containerIcon.innerHTML += generatorBox(icon);
		});
		 
	 }

	 //filtra le box in base alla scelta
	 function filtro(box) {
		 icone.filter((box) => {
			return box.type == scelta.value;
		});
	 }

	 //inserisci le box filtrate
	 function insertFilterBox() {
		 let boxes = filtro();
		 boxes.forEach((box) => {
			containerIcon.innerHTML += generatorBox(box);
		});

	} 
