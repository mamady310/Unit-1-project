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
  frontOfCard.innerHTML = cardDataList[0].front
    
  
//   console.log(frontOfCard);

// newParagraph.innerHTML = characterBio
let backOfCard = document.querySelector(".theback");
backOfCard.innerHTML = cardDataList[0].back

// for( i=0; i< cardDataList.length; i++);

document.querySelector('button').addEventListener("click", () => {
 console.log("when is this going to be over");

})
