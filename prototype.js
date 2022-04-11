function Poem({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}){
    this.year = yearFromInternet;
    this.author = authorFromInternet;
    this.title = titleFromInternet;
    this.text = textFromInternet;
    this.makePage = function (){
        console.log(`
            Title: ${this.title}

            ${this.body}

            Author: ${this.author}
            Year: ${this.year}
        `);
    }
}

const poemData = {
    yearFromInternet: 1962,
    authorFromInternet: "Weöres Sándor",
    titleFromInternet: "Énhasadás",
    textFromInternet: `Utcasarkon várok rám, 
    fél órája is van tán, 
    ám értelmem fölragyog, 
    nem jövök mert itt vagyok.`
}

//Poem.prototype.lang = "HUN"
//const favoritePoemOfAndras = new Poem(poemData)
//favoritePoemOfAndras.favBy = "Andras Ranki"
/* 
console.log(favoritePoemOfAndras.lang)
console.log(favoritePoemOfAndras.__proto__)
console.log(Poem.prototype);
 */
poemData.makePage()