import { getProducts } from "./api.js"
import { myCard } from "./card.js";

const printCards = async () => {
    let wrapper = document.getElementById("card-wrapper");
    let products = await getProducts()
    console.log(products)
    products.forEach((item) => {
        let { category, description, id, image, price, rating, title} = item
        console.log(image, id)
        let col = document.createElement("div");
        col.classList.add("container");
        col.appendChild(myCard(category, description, id, image, price, rating, title));
        wrapper.append(col);
    });
};
printCards();




