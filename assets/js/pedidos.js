/* -- Processo de pedido ---
> CROCHÊ DO CATÁLOGO:
1. Pessoa clica no botão de pedir que já tem info do Nome, categoria e preço do crochê
2. Abre um POP-UP com as informações do produto já dadas e uma breve descrição + formulário para ele preencher com os seguintes dados: Nome do cliente, Tipo de entrega e Tipo de pagamento.
3. A programação pegará todas essas info e transformará em URL com o seguinte template:
https://api.whatsapp.com/send?phone=+5582988950899&text=

-> Oi! 👋 Meu nome é ${nameClient}, estou interessado no(a) ${categoryCrochet} de ${nameCrochet}. O tipo de entrega que eu quero é ${typeDelivery} e o pagamento vai ser feito com ${typePayment}

> ENCOMENDA PERSONALIZADA:
1. Pessoa clica no botão de encomenda e vai ser direcionada para uma página para preencher os dados da encomenda e os dados dela (Categoria, Tema, Nome da pessoa, Tipo de entrega, Tipo de pagamento)
2. A programação pegará essas info e transformará em URL com o seguinte template:
https://api.whatsapp.com/send?phone=+5582988950899&text=

-> Oi! 👋 Meu nome é ${nameClient}, gostaria de encomendar um ${categoryCrochet} com esse tema: ${temaCroche}. O tipo de entrega que eu quero é ${typeDelivery} e o pagamento é ${typePayment}.
*/

/*const nameCrochet = "Circus Baby"
const categoryCrochet = "Boneca média"
let escolha = prompt("[A]: Catálogo\n [B]: Encomenda")
*/

const requestCrochetBtn = document.querySelector("requestCrochet")
const modal = document.querySelector("dialog")

function knowMore(imgURL, nameCrochet, categCrochet, descCrochet, priceCrochet) {
    const popupContainer = document.createElement('div');
    popupContainer.classList.add("requestPopup");

    const newHTML = `
        <button class="closePopupBtn" onclick="closePopup()">&times;</button>
        <img src="${imgURL}" class="imgPopup" alt="${nameCrochet}">
        <div class="textPopup">
            <p class="categoryCrochet">${categCrochet}</p>
            <h2 class="nameCrochet">${nameCrochet}</h2>
            <h3 class="subtitlePopup">Descrição:</h3>
            <p>${descCrochet}</p>
            <h3 class="subtitlePopup">Valor:</h3>
            <h2 class="priceCrochet">R$${priceCrochet.toFixed(2)}</h2>

            <h3 class="subtitlePopup">Informações:</h3>
            <div class="infoContainer">
                <div class="infoBox">
                    <h3>Parcelamento até 2x</h3>
                    <p>50% antes da produção e 50% antes da entrega</p>
                </div>
                <div class="infoBox">
                    <h3>Entrega presencial de GRAÇA</h3>
                    <p>Exclusivo para estudantes SESI EBEP</p>
                </div>
                <div class="infoBox">
                    <h3>Frete de acordo com localização</h3>
                    <p>Delivery somente em Maceió</p>
                </div>
                <div class="infoBox">
                    <h3>Com amigos tem desconto</h3>
                    <p>Para compras de no mínimo 5 crochês você ganha 10% off</p>
                </div>
            </div>

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
    `;

    popupContainer.innerHTML = newHTML;

    popupContainer.style.transition = "transform 0.3s, opacity 0.3s";
    popupContainer.style.opacity = "0"; 
    popupContainer.style.transform = "translateX(360px)"; 

    setTimeout(() => {
        popupContainer.style.opacity = "1";
        popupContainer.style.transform = "translateX(0)";
    }, 10);

    popupContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("requestCrochet")) {
            const nameClient = document.querySelector(".getNameClient").value;
            const qntCrochet = document.querySelector(".getQntCrochet").value;
            const typeDelivery = document.querySelector("#getTypeDelivery").value;
            const typePayment = document.querySelector("#getTypePayment").value;


                if (!nameClient || nameClient === "null" || !qntCrochet || qntCrochet === "null" ||
            !typeDelivery || typeDelivery === "null" || !typePayment || typePayment === "null") {
            alert("Por favor, preencha todos os campos antes de enviar o pedido.");
            return; 
        }
            requestCrochet(nameCrochet, categCrochet, priceCrochet, nameClient, qntCrochet, typePayment, typeDelivery);
        }
    });

    document.body.appendChild(popupContainer);

}



function requestCrochet(nameCrochet, categCrochet, priceCrochet, nameClient, qntCrochet, typePayment, typeDelivery) {

    let message = `Oi! 👋 Meu nome é ${nameClient}, quero fazer o pedido de ${qntCrochet} crochê(s) de ${categCrochet} de ${nameCrochet}. O tipo de entrega que eu quero é ${typeDelivery} e o pagamento será feito com ${typePayment}.`

    linkWhatsapp = `https://api.whatsapp.com/send?phone=+5582988950899&text=` + encodeURIComponent(message)

    const finishPopup = document.createElement('div')
    finishPopup.classList.add('finishPopup')

    let newHTML = `
        <div class="logoPopup"></div>
        <div class="textPopup">
            <h1>Total: R$${(priceCrochet * qntCrochet).toFixed(2)}</h1>
            <p>Clique no botão abaixo para mandar sua mensagem automaticamente por WhatsApp</p>
            <button class="requestCrochet" onclick="closeFinishPopup(); window.open('${linkWhatsapp}', '_blank')">
                <i class="fa-brands fa-whatsapp"></i>
                Enviar</button>
        </div>`


    document.body.appendChild(finishPopup);    
    finishPopup.innerHTML = newHTML

}

function closePopup() {
    const requestCrochetPopup = document.querySelector(".requestPopup")

    requestCrochetPopup.style.transition = "transform 0.3s, opacity 0.3s";
    requestCrochetPopup.style.opacity = "0"; 
    requestCrochetPopup.style.transform = "translateX(100%)"; 

    requestCrochetPopup.addEventListener("transitionend", function () {
        requestCrochetPopup.remove();
    });
}

function closeFinishPopup(){
    const finishPopup = document.querySelector(".finishPopup")
    finishPopup.remove()
}