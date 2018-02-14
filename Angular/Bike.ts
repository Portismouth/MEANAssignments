class Bike {
    constructor(public price: number, public max_speed: number, public miles?: number) {
        this.miles = 0;
    }
    displayInfo = function () {
        let info = {
            price: this.price,
            max_speed: this.max_speed,
            miles: this.miles
        }
        console.log(info);
    }

    ride = function (times?) {
        if (times) {
            this.miles += (10 * times);
        } else {
            this.miles += 10;
        }
    }

    reverse = function (times?) {
        if (times) {
            this.miles -= (10 * times);
        } else {
            this.miles -= 10;
        }
    }
}

const bike1 = new Bike(25, 30);

bike1.displayInfo();
bike1.ride(3);
bike1.displayInfo();

const bike2 = new Bike(25, 30);

bike2.displayInfo();
bike2.ride(2);
bike2.displayInfo();
bike2.reverse(2)
bike2.displayInfo();