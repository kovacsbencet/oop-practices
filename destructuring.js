const poemData = {
    yearFromInternet: 1962,
    authorFromInternet: "Weöres Sándor",
    titleFromInternet: "Énhasadás",
    textFromInternet: `Utcasarkon várok rám, 
    fél órája is van tán, 
    ám értelmem fölragyog, 
    nem jövök mert itt vagyok.`
}

//console.log(poemData.authorFromInternet);

const pdafi = poemData.authorFromInternet;

const pdyfi = poemData.yearFromInternet;

//const {yearFromInternet, authorFromInternet} = poemData

//console.log(yearFromInternet)
//console.log(authorFromInternet)

function funWithPoemData({yearFromInternet, authorFromInternet}){
    console.log(yearFromInternet)
    console.log(authorFromInternet)
}
//funWithPoemData(poemData)

const array = ["Kecske", "Fóka", "Macska", function(){console.log("Szia!")}, "Kutya"]

const firstItem = array[0]
const secondItem = array[1]

const [firstItemX,, secondItemX, ...elseX] = array

console.log(firstItemX === firstItem)

//console.log(elseX)

const [,,, ourFun] = array

ourFun()

