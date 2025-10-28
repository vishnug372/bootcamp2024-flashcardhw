const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const cardContent = document.getElementById("card-content");
    if (flashcards.length === 0){
        cardContent.innerText = "No flashcards yet.";
        return;
    }
    const currentCard = flashcards[currentIndex];
    if (showingTerm){
        cardContent.innerText = currentCard.term;
    } else if (!showingTerm){
        cardContent.innerText = currentCard.definition;
    }


}

// The rest of the code you will write is apart of event listeners
document.getElementById("flashcard").addEventListener("click", function() {
   showingTerm = !showingTerm;
   displayCard();
});
document.getElementById("next-btn").addEventListener("click", function() {
    if (currentIndex === flashcards.length - 1){
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1
    }
   
   showingTerm = true;
   displayCard();
});
document.getElementById("prev-btn").addEventListener("click", function() {
    if (currentIndex === 0){
        currentIndex = flashcards.length -1;
    } else {
        currentIndex = currentIndex -1
    }   
    showingTerm = true;
    displayCard();
});
document.getElementById("add-card-btn").addEventListener("click", function() {
   flashcards.push({ term: document.getElementById("new-term").value, 
    definition: document.getElementById("new-definition").value });
    document.getElementById("new-term").value = "";
    document.getElementById("new-definition").value = "";
   displayCard();
});
// This line will display the card when the page is refreshed
window.onload = displayCard;
