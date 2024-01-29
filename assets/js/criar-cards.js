criarCardFirstCatalogue("https://m.media-amazon.com/images/I/71h-FOjlXsL._AC_UF894,1000_QL80_.jpg", 0, "Baby", 15)
criarCardFirstCatalogue("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQes3bgT0tVBc494pWnLAYcp64JNA2G0nbjOw&usqp=CAU", 1, "Galinha", 15)
criarCardFirstCatalogue("https://m.media-amazon.com/images/I/71h-FOjlXsL._AC_UF894,1000_QL80_.jpg", 2, "Galinha", 15)
criarCardFirstCatalogue("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQes3bgT0tVBc494pWnLAYcp64JNA2G0nbjOw&usqp=CAU", 3, "Galinha", 15)
criarCardFirstCatalogue("https://m.media-amazon.com/images/I/71h-FOjlXsL._AC_UF894,1000_QL80_.jpg", 0, "Baby", 15)
criarCardFirstCatalogue("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQes3bgT0tVBc494pWnLAYcp64JNA2G0nbjOw&usqp=CAU", 1, "Galinha", 15)
criarCardFirstCatalogue("https://m.media-amazon.com/images/I/71h-FOjlXsL._AC_UF894,1000_QL80_.jpg", 2, "Galinha", 15)
criarCardFirstCatalogue("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQes3bgT0tVBc494pWnLAYcp64JNA2G0nbjOw&usqp=CAU", 3, "Galinha", 15)

function criarCardFirstCatalogue(imgURL, categCard, nameCard, priceCard) {
    const firstCatalogue = document.querySelector(".first.catalogue")
    
    const categories = [
        "Chaveiro [K]",
        "Boneco(a) [P]",
        "Boneco(a) [M]",
        "Boneco(a) [G]"
    ]

    let cardElement = document.createElement("div")
    cardElement.classList.add("cardCrochet")

    let imgElement = document.createElement("img")
    imgElement.src = imgURL
    imgElement.alt = nameCard

    let textElement = document.createElement("div")
    textElement.classList.add("textCrochet")

    let categCardElement = document.createElement("p")
    categCardElement.textContent = `${categories[categCard]}`
    categCardElement.classList.add("categoryCrochet")

    let nameCardElement = document.createElement("h2")
    nameCardElement.textContent = nameCard
    nameCardElement.classList.add("nameCrochet")

    let priceCardElement = document.createElement("p")
    priceCardElement.textContent = `R$${priceCard}`
    priceCardElement.classList.add("priceCrochet")

    let requestCrochetBtn = document.createElement("button")
    requestCrochetBtn.textContent = "Pedir Agora"
    requestCrochetBtn.classList.add("requestCrochet")

    firstCatalogue.appendChild(cardElement)
    cardElement.appendChild(imgElement)
    cardElement.appendChild(textElement)
    textElement.appendChild(categCardElement)
    textElement.appendChild(nameCardElement)
    textElement.appendChild(priceCardElement)
    cardElement.appendChild(requestCrochetBtn)
}
