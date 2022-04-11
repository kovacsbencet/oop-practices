// class-ra át kell írni a protoypeot

class Poem {
    constructor(year, author, title, text) {
      this.year = year;
      this.author = author;
      this.title = title;
      this.text = text;

    }
    makePage(){
        console.log(`
            Title: ${this.title}

            ${this.text}

            Author: ${this.author}
            Year: ${this.year}
        `);
    }
};

const favoritePoem = new Poem(1962,"Weöres Sándor","Énhasadás", `Utcasarkon várok rám, fél órája is van tán, ám értelmem fölragyog, nem jövök mert itt vagyok.`)

//console.log(favoritePoem)
favoritePoem.makePage()

class ForeignPoem extends Poem{
    constructor(year, author, title, text, translator){
        super(author, title, year, text)
        this.translator = translator
    }
    makePage(){
        console.log(`
            Title: ${this.title}

            ${this.text}

            Author: ${this.author}
            Translator: ${this.translator}
            Year: ${this.year}
        `);
    }
}

const weoresPoem = new ForeignPoem(1962,"Weöres Sándor","Énhasadás", `Utcasarkon várok rám, fél órája is van tán, ám értelmem fölragyog, nem jövök mert itt vagyok.`, "Alan Dixon")

weoresPoem.makePage()