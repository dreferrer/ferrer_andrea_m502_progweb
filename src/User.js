export class User {
    
    constructor(parsedData){
        this.title = parsedData.name.title;
        this.first = parsedData.name.first;
        this.last = parsedData.name.last;
        this.city = parsedData.location.city;
        this.country = parsedData.location.country;
        this.age = parsedData.dob.age;
        this.email = parsedData.email;
        this.photo = parsedData.picture.large;
        this.availability = false;
        this.html = this.generateHTML(user);
    }

    //Méthode pour générer un élément utilisateur
    generateHTML(user){
        const divElement = document.createElement("div");
        divElement.classList.add("user");
        divElement.dataset = this.availability;

        const childHTML = 
        `<img src="${this.photo}">
		<div class="user--info">
				<h1>${this.title} ${this.first} ${this.last}</h1>
				<p>${this.age} years old</p>
				<p>${this.city}, ${this.country}</p>
		</div>
		<a href="mailto:${this.email}">
				<span class="mail">✉️</span>
		</a>
    `

    divElement.insertAdjacentHTML("afterbegin", childHTML);
    }

    //Méthode d’affichage des éléments utilisateurs
    render(){
        const main = document.querySelector("main");
        main.insertAdjacentHTML("afterbegin", this.html);
    }

   //Méthode d’inversion de présence
   inversion(){
    const userElement = document.querySelector("user")
    const dataset = userElement.dataset;

    userElement.addEventListener("click", event => {
        dataset = "true";
    })
    
   }
}