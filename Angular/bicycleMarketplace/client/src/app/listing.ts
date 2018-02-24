export class Listing {
    constructor(
        public id: number = null,
        public title: string = "",
        public desc: string = "",
        public price: number = 0,
        public location: string = "",
        public image: string = ""
    ) {}
}
