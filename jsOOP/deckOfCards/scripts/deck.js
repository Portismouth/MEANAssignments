class Deck {
    constructor() {
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this.stringVals = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        this.cards = [];
        this.suits.forEach(suit => {
            var val = 1;
            this.stringVals.forEach(stringVal => {
                this.cards.push(new Card(stringVal, suit, val));
                val += 1;
            });
        });
    }

    showDeck() {
        console.log(this.cards);
    }

    // shuffle () {
    //     var m = this.cards.length, t, i;

    //     // While there remain elements to shuffle…
    //     while (m) {

    //         // Pick a remaining element…
    //         i = Math.floor(Math.random() * m--);

    //         // And swap it with the current element.
    //         t = this.cards[m];
    //         this.cards[m] = this.cards[i];
    //         this.cards[i] = t;
    //     }

    //     return this.cards;
    // }
}

class ShuffledDeck extends Deck {
    constructor() {
        super();
    }

    shuffle() {
        var m = this.cards.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }

        return this.cards;
    }

    // reset () {
    //     this = new Deck();
    // }

    deal() {
        let rand = Math.floor(Math.random() * (this.cards.length));
        this.card = this.cards.splice(rand, 1);
        console.log(this.card);
        return this.card;
    }
}