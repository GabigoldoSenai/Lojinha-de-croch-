criarCard("https://sarahmaker.com/wp-content/uploads/2021/07/how-to-double-crochet-24.jpg", 2, "Baby", "5,00",)
criarCard("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQes3bgT0tVBc494pWnLAYcp64JNA2G0nbjOw&usqp=CAU", 2, "Galinha", "15,00",)

function criarCard(imgURL, categCard, nameCard, priceCard) {
    const firstCatalogue = document.querySelector("#first-catalogue")
    
    const categories = [
        "Chaveiro [C]",
        "Boneco(a) [P]",
        "Boneco(a) [M]",
        "Boneco(a) [G]"
    ]

    let card = document.createElement("div")
    card.classList.add("card")

    let img = document.createElement("img")
    img.src = imgURL
    img.alt = nameCard

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

    firstCatalogue.appendChild(card)
    card.appendChild(img)
    card.appendChild(categCardElement)
    card.appendChild(nameCardElement)
    card.appendChild(priceCardElement)
    card.appendChild(requestCrochetBtn)
}
