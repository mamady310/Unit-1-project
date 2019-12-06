//Create questions and answers for the front and back of the cards
var cardDataList = [
 {
     front:"Bonjour",
     back:"Hello",
 },
 {   front:"chat",
     back:"cat",
 },
 {   front:"Au revoir",
     back:"Goodbye",
 },
 {   front:"câlin",
     back:"hug",
 },
 {   front:"doux",
     back: "this is the back of five",
 },
 {   front:"orage",
     back:"thunderstorm",
 },
{    front:"soleil",
     back:"sun",
},
]

// create variable that puts the array of cardDataList into the class

let theCardInfo = document.querySelector(".thecard"); 
//   console.log(theCardInfo);

let cardData = cardDataList

let frontOfCard = document.querySelector(".thefront");
  frontOfCard.innerHTML = cardDataList[0].front
    
//   console.log(frontOfCard);
// newParagraph.innerHTML = characterBio

let backOfCard = document.querySelector(".theback");
backOfCard.innerHTML = cardDataList[0].back
// for( i=0; i< cardDataList.length; i++);

// document.querySelector('button').addEventListener("click", () => {
//  console.log("cardDataList");
// })
 
// Cannot add eventlistener to an array
//cardDataList.forEach( (cardDataList) => {
//     console.log(cardDataList.frontOfCard && cardDataList.backOfCard)
// })
 
let grabButton =  document.querySelector('button')
let roundTracker = 1


grabButton.addEventListener("click", () => {
    frontOfCard.innerHTML = cardDataList[roundTracker].front 
    backOfCard.innerHTML = cardDataList[roundTracker].back
    roundTracker++
})


// let resetButton = document.querySelector('.button1')
// resetButton.addEventListener("click", () => {
//         frontOfCard.innerHTML = cardDataList[0].front
//         backOfCard.innerHTML = cardDataList[0].back     
// })


//Add click event to refresh page instead of going to beginning of array

 let resetButton = document.querySelector('.button1')
     resetButton.addEventListener("click", () =>{
        window.location.reload(true); 
     })


// side bar info convo below
//let grabParas = document.querySelectorAll('something')

// for (let i = 0; i < grabParas.length; i++) {
//     grabParas[i].addEventListener
    
// }

// event listener for score button 
let scoreButton = document.querySelector('.button2')
let scoreValue = 0
let scoreElement = document.querySelector(".score")

scoreButton.addEventListener("click", () => {
    console.log("clicked")
    scoreValue++
    scoreElement.innerText = scoreValue    
})

// add variable to increase score every time score button is clicked


