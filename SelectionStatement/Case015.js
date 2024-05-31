// The suits of playing cards are numbered as: 1 — spades, 2 — clubs, 3 —
// diamonds, 4 — hearts. Card values ―Jack‖, ―Queen‖, ―King‖, ―Ace‖ are
// numbered as 11, 12, 13, 14 respectively. A card value N (as an integer in the
// range 6 to 14) and a suit M (as an integer in the range 1 to 4) are given. Output
// the card description as: ―six of diamonds‖, ―queen of spades‖, etc.

function cardDescription(N, M) {
    let value, suit;

    // Map card values to their corresponding names
    switch (N) {
        case 6:
            value = "six";
            break;
        case 7:
            value = "seven";
            break;
        case 8:
            value = "eight";
            break;
        case 9:
            value = "nine";
            break;
        case 10:
            value = "ten";
            break;
        case 11:
            value = "jack";
            break;
        case 12:
            value = "queen";
            break;
        case 13:
            value = "king";
            break;
        case 14:
            value = "ace";
            break;
        default:
            return "Invalid card value";
    }

    // Map card suits to their corresponding names
    switch (M) {
        case 1:
            suit = "spades";
            break;
        case 2:
            suit = "clubs";
            break;
        case 3:
            suit = "diamonds";
            break;
        case 4:
            suit = "hearts";
            break;
        default:
            return "Invalid card suit";
    }

    return `${value} of ${suit}`;
}

// Example usage:
console.log(cardDescription(6, 3));  // Output: "six of diamonds"
console.log(cardDescription(12, 1)); // Output: "queen of spades"
console.log(cardDescription(14, 4)); // Output: "ace of hearts"
