const charactersContainer = document.querySelector(".characters-container");


const traerDatos = async () => {

    try {
      let datos_globales = await axios(`https://rickandmortyapi.com/api/character`);
      let datos_personajes = datos_globales.data.results

      datos_personajes.map(personaje => new Personaje(personaje));

     } catch (error) {
        throw error;
     }     
};

class Personaje {
  constructor({id, name, image, gender, species}) {
    this.__id = () => id;
    this.__name = () => name;
    this.__image = () => image;
    this.__gender = () => gender;
    this.__species = () => species;
    this.show();
  }

    get id() {
      return this.__id()
    }
    get name() {
      return this.__name()
    }
    get image() {
      return this.__image()
    }
    get gender() {
      return this.__gender()
    }
    get species() {
      return this.__species()
    }
    show(){
      const card = document.createElement("div");
      card.classList.add("characters-card");
  
      const cardImage = document.createElement("div");
      cardImage.classList.add("img-container");
  
      const characterPhoto = document.createElement("img");
      characterPhoto.src = this.image;
  
      const characterId = document.createElement("p");
      characterId.classList.add("character-id");
      characterId.textContent = `ID: ${this.id}`;
  
      const cardName = document.createElement("p");
      cardName.classList.add("name");
      cardName.textContent =
        this.name.charAt(0).toUpperCase() + this.name.slice(1);
  
      const cardGender = document.createElement("p");
      cardGender.classList.add("gender");
      cardGender.textContent = this.gender;
  
      const cardSpecies = document.createElement("h2");
      cardSpecies.classList.add("species");
      cardSpecies.textContent = this.species;
  
  
      charactersContainer.appendChild(card);
  
      cardImage.appendChild(characterPhoto);
      card.appendChild(cardImage);
      card.appendChild(characterId);
      card.appendChild(cardName);
      card.appendChild(cardGender);    
      card.appendChild(cardSpecies);
    }
  }

window.onload = async () => {
  await traerDatos();
}