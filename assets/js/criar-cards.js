

function criarCardFirstCatalog(catalogNum, imgURL, categCard, descCard, nameCard, priceCard) {
    const firstCatalog = document.querySelector(".first.catalog")
    const secondCatalog = document.querySelector(".second.catalog")

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
    priceCardElement.textContent = `R$${priceCard.toFixed(2)}`
    priceCardElement.classList.add("priceCrochet")

    let knowMoreBtn = document.createElement("button")
    knowMoreBtn.textContent = "Saiba mais"
    knowMoreBtn.classList.add("requestCrochet")
    knowMoreBtn.addEventListener("click", function() {
        knowMore( imgURL ,nameCard, categories[categCard], descCard, priceCard);
    });

    if(catalogNum === 1){
        firstCatalog.appendChild(cardElement)
    }else{
        secondCatalog.appendChild(cardElement)
    }
    
    cardElement.appendChild(imgElement)
    cardElement.appendChild(textElement)
    textElement.appendChild(categCardElement)
    textElement.appendChild(nameCardElement)
    textElement.appendChild(priceCardElement)
    cardElement.appendChild(knowMoreBtn)
}
