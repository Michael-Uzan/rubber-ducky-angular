import { ICartItem } from "../interfaces/ICartItem.interface";

export const CART_DATA: ICartItem[] = [
    {
        item: {
            _id: "os566nbkirf443a5d64b32ca",
            name: "Frankenstein Rubber Duck",
            price: 9.50,
            img: "./assets/img/ducks/frankenstein.JPG",
        },
        quantity: 2,
    },
    {
        item: {
            _id: "2a5664025f6ae9aa24a99aer",
            name: "I Love Pizza Rubber Duck",
            price: 9.50,
            img: "./assets/img/ducks/i-love-pizza.JPG",
        },
        quantity: 1,
    },
    {
        item: {
            _id: "12o65hj4i23of9r24a9476o",
            name: "Stork with Baby Rubber Duck",
            price: 8.50,
            img: "https://www.amsterdamduckstore.com/wp-content/uploads/2021/08/stork-with-baby-rubber-duck-front-400x400.jpg",
        },
        quantity: 3,
    }
];