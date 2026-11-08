// Save flashcards
function saveCard(question, answer) {
    let cards = JSON.parse(
        localStorage.getItem("flashcards") || "[]"
    );

    cards.push({
        question: question,
        answer: answer
    });

    localStorage.setItem(
        "flashcards",
        JSON.stringify(cards)
    );
}

// Get saved flashcards
function getCards() {
    return JSON.parse(
        localStorage.getItem("flashcards") || "[]"
    );
}

// Delete a flashcard
function deleteCard(index) {
    let cards = getCards();
    cards.splice(index, 1);

    localStorage.setItem(
        "flashcards",
        JSON.stringify(cards)
    );
}