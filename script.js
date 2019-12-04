//Create questions and answers for the front and back of the cards
var cardDataList = [
 {
     front:"this is the front of one",
     back:"this is the back of one",
 },
 {   front:"this is the front of two",
     back:"this is teh back of two",
 },

]

// create variable that puts the array of cardDataList into the class

let theCardInfo = document.querySelector(".thecard"); 
//   console.log(theCardInfo);

  let frontOfCard = document.querySelector(".thefront");
    //   console.log(frontOfCard);

console.log(cardDataList);



frontOfCard.innerHTML = cardDataList[0].front

// newParagraph.innerHTML = characterBio
let backOfCard = document.querySelector(".theback");
backOfCard.innerHTML = cardDataList[0].back