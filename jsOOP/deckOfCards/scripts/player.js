class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    takeCard(deck = ShuffledDeck(), draw = 1) {
        while (draw > 0) {
            let newCard = deck.deal();
            this.hand.push(newCard)
            draw--;
        }
    }

    read() {
        let count = 0;
        this.hand.forEach(card => {
            count++;
        })
        console.log(this.hand.length)
        console.log("You have " + count + " cards in your hand. They are: ");
        for (var i = 0; i < this.hand.length; i++) {
            console.log("The " + this.hand[i][0]["stringVal"] + " of " + this.hand[i][0]["suit"]);
        }
    }

    discard() {
        this.hand.shift();
    }
}
