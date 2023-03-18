const myCard = (category, description, id, image, price, rating, title) => {
    let card = document.createElement("div")
    card.classList.add(..."card bg-dark text-white col-12 col-md-3 m-3".split(" "))
    let img = document.createElement("img")
    img.classList.add(..."card-img-top img-container".split(" "))
    img.setAttribute("src", image);
    let cBody = document.createElement("div")
    cBody.classList.add("card-body")
    let titlecard = document.createElement("h1")
    titlecard.textContent= title
    let precio = document.createElement("p")
    precio.textContent = price
    let text = document.createElement("p")
    text.textContent = description
    let button = document.createElement("a")
    button.textContent ="Agregar Producto"
    button.classList.add(..."btn btn-primary mb-2".split(" "))
    button.setAttribute("target", `_blank`)
    cBody.append(titlecard, precio, text)
    card.append(img, cBody, button)
    return card
}
export {myCard}