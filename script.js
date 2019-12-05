//Create questions and answers for the front and back of the cards
var cardDataList = [
 {
     front:"this is the front of one one one",
     back:"this is the back of one",
 },
 {   front:"this is the front of two",
     back:"this is teh back of two",
 },
 {   front:"this is the front of three",
     back:"this is the back of three",
 },
 {   front:"this is the front of four",
     back:"this is the back of four",
 },
 {   front:"this is the front of five",
     back: "this is the back of five",
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

grabButton.addEventListener("click", () =>{
        frontOfCard.innerHTML = cardDataList[roundTracker].front 
        backOfCard.innerHTML = cardDataList[roundTracker].back
        roundTracker++
})

let resetButton = document.querySelector('.button1')

resetButton.addEventListener("click", () =>{
        frontOfCard.innerHTML = cardDataList[0].front
        backOfCard.innerHTML = cardDataList[0].back     
})

// side bar info convo below
//let grabParas = document.querySelectorAll('something')

// for (let i = 0; i < grabParas.length; i++) {
//     grabParas[i].addEventListener
    
// }