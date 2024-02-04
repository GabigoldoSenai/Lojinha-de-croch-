const requestCrochetBtn = document.querySelector("requestCrochet")
const modal = document.querySelector("dialog")
let isPopupOpened = false

function knowMore(imgURL, nameCrochet, categCrochet, descCrochet, priceCrochet) {
    if (isPopupOpened) {
        closePopup()
    }
    isPopupOpened = true
    const popupContainer = document.createElement('div')
    popupContainer.classList.add("requestPopup")

    const newHTML = `
            <button class="closePopupBtn" onclick="closePopup()">&times</button>
            <img src="${imgURL}" class="imgPopup" alt="${nameCrochet}">
            <div class="textPopup">
                <p class="categoryCrochet">${categCrochet}</p>
                <h2 class="nameCrochet">${nameCrochet}</h2>
                <h3 class="subtitlePopup">Descrição:</h3>
                <p>${descCrochet}</p>
                <h3 class="subtitlePopup">Valor:</h3>
                <h2 class="priceCrochet">R$${priceCrochet.toFixed(2)}</h2>

                <h3 class="subtitlePopup">Preencha os dados</h3>
                <form class="requestForm">
                    <input type="text" class="getNameClient" required placeholder="Seu Nome/Apelido">
                    <input type="number" class="getQntCrochet" required placeholder="Quantidade">

                    <div class="selectBox">
                        <select id="getTypeDelivery" required>
                            <option selected value="null">Entrega</option>
                            <option value="Delivery">Delivery</option>
                            <option value="Presencial">Presencial</option>
                        </select>

                        <select id="getTypePayment" name="getTypePayment" required>
                            <option selected value="null">Pagamento</option>
                            <option value="PIX">PIX</option>
                            <option value="Dinheiro">Dinheiro</option>
                        </select>
                    </div>

                    <button type="button" class="requestCrochet">Criar Pedido</button>
                </form>
            </div>
        `

    popupContainer.innerHTML = newHTML

    popupContainer.style.transition = "transform 0.3s, opacity 0.3s"
    popupContainer.style.opacity = "0"
    popupContainer.style.transform = "translateX(360px)"

    setTimeout(() => {
        popupContainer.style.opacity = "1"
        popupContainer.style.transform = "translateX(0)"
    }, 10)

    popupContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("requestCrochet")) {
            const nameClient = document.querySelector(".getNameClient").value
            const qntCrochet = document.querySelector(".getQntCrochet").value
            const typeDelivery = document.querySelector("#getTypeDelivery").value
            const typePayment = document.querySelector("#getTypePayment").value


            if (!nameClient || nameClient === "null" || !qntCrochet || qntCrochet === "null" ||
                !typeDelivery || typeDelivery === "null" || !typePayment || typePayment === "null") {
                alert("Por favor, preencha todos os campos corretamente antes de enviar o pedido.")
                return
            }
            requestCrochet(nameCrochet, categCrochet, priceCrochet, nameClient, qntCrochet, typePayment, typeDelivery)
        }
    })

    document.body.appendChild(popupContainer)



}

function requestCrochet(nameCrochet, categCrochet, priceCrochet, nameClient, qntCrochet, typePayment, typeDelivery) {
    closePopup()

    let message = `Oi! 👋 Meu nome é ${nameClient}, quero fazer o pedido de ${qntCrochet} crochê(s) de ${categCrochet} de ${nameCrochet}. O tipo de entrega que eu quero é ${typeDelivery} e o pagamento será feito com ${typePayment}.`


    // Usa a API Clipboard para copiar o texto para a área de transferência
    navigator.clipboard.writeText(message)

    const finishPopup = document.createElement('div')
    finishPopup.classList.add('finishPopup')

    let newHTML = `
        <div class="logoPopup"></div>
        <div class="textPopup">
            <h1>Total: R$${(priceCrochet * qntCrochet).toFixed(2)}</h1>
            <p>Sua mensagem foi copiada com sucesso! Clique no botão abaixo e cole-a na área de mensagem.</p>
            <button class="requestCrochet" onclick="closeFinishPopup(); window.open('https://api.whatsapp.com/send?phone=+5582988950899&text=Cole sua mensagem automática aqui!', '_blank')">
                <i class="fa-brands fa-whatsapp"></i>
                Enviar</button>
        </div>`


    document.body.appendChild(finishPopup)
    finishPopup.innerHTML = newHTML

}

function closePopup() {
    isPopupOpened = false
    const requestCrochetPopup = document.querySelector(".requestPopup")

    requestCrochetPopup.style.transition = "transform 0.3s, opacity 0.3s"
    requestCrochetPopup.style.opacity = "0"
    requestCrochetPopup.style.transform = "translateX(100%)"

    requestCrochetPopup.addEventListener("transitionend", function () {
        requestCrochetPopup.remove()
    })
}

function closeFinishPopup() {
    const finishPopup = document.querySelector(".finishPopup")
    finishPopup.remove()
}