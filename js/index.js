const Users = [];
const petRegistrati = [];

class User {
	constructor(firstName, lastName, age, location) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.location = location;
		this.sameAge = (key, value) => {
			for (let elem of users) {
				const [key, value] = elem;
			}
		};
	}
}

class Pet {
	constructor(petName, ownerName, species, breed) {
		this.petName = petName;
		this.ownerName = ownerName;
		this.species = species;
		this.breed = breed;
	}
	hasSameOwner(petDaConfrontare) {
		return (
			this.ownerName.toLowerCase() === petDaConfrontare.ownerName.toLowerCase()
		);
	}
	static checkOwners(istanza1, istanza2) {
		return (
			istanza1.ownerName.toLowerCase() === istanza2.ownerName.toLowerCase()
		);
	}
}
function compareOwners() {
	console.log(petRegistrati[0].hasSameOwner(petRegistrati[1]));
}

window.onload = () => {
	const form = document.querySelector("form");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		const petName = document.getElementById("petName");
		const ownerName = document.getElementById("ownerName");
		const species = document.getElementById("species");
		const breed = document.getElementById("breed");

		const nuovoPet = new Pet(
			petName.value,
			ownerName.value,
			species.value,
			breed.value
		);
		petRegistrati.push(nuovoPet);
		console.log(petRegistrati);

		const listaPets = document.getElementById("listaPets");
		const mioDiv = document.createElement("div");
		mioDiv.classList.add("pet");
		const mioSpan = document.createElement("span");
		mioSpan.classList.add(
			"d-flex",
			"align-items-center",
			"justify-content-between"
		);
		mioSpan.innerHTML = `<div><span>Nome: </span>${petName.value} <span>Proprietario: </span>${ownerName.value} <span>Specie: </span>${species.value} <span>Razza: </span>${breed.value}</div> <i class="bi bi-x-circle-fill text-danger fs-3 me-4"></i
        >`;
		petName.value = "";
		ownerName.value = "";
		species.value = "";
		breed.value = "";

		mioDiv.appendChild(mioSpan);
		listaPets.appendChild(mioDiv);

		const allIcons = document.getElementsByTagName("i");

		for (let i = 0; i < allIcons.length; i++) {
			const element = allIcons[i];
			element.addEventListener("click", function (event) {
				event.currentTarget.parentElement.parentElement.remove();
			});
		}
	});
};
