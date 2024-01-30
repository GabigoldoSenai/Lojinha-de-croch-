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

function knowMore(imgURL, nameCrochet, categCrochet, priceCrochet) {
    const popupContainer = document.createElement('div');
    popupContainer.classList.add("requestPopup");

    const newHTML = `
        <button class="closePopupBtn" onclick="closePopup()">&times;</button>
        <img src="${imgURL}" class="imgPopup" alt="${nameCrochet}">
        <div class="textPopup">
            <p class="categoryCrochet">${categCrochet}</p>
            <h2 class="nameCrochet">${nameCrochet}</h2>
            <h3 class="subtitlePopup">Descrição:</h3>
            <p>Tamanho: 14cm x 5cm</p>
            <h3 class="subtitlePopup">Valor:</h3>
            <h2 class="priceCrochet">${priceCrochet}</h2>

            <h3 class="subtitlePopup">Informações:</h3>
            <div class="infoContainer">
                <div class="infoBox">
                    <h3>Parcelamento para compras +R$50</h3>
                    <p>Até 2x no PIX</p>
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
                    <p>Para compras de no mínimo 3 crochês você ganha 20% off</p>
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

                <button type="button" class="requestCrochet">Enviar Pedido</button>
            </form>
        </div>
    `;

    popupContainer.innerHTML = newHTML;

    // Event delegation for dynamically created elements
    popupContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("requestCrochet")) {
            const nameClient = document.querySelector(".getNameClient").value;
            const qntCrochet = document.querySelector(".getQntCrochet").value;
            const typeDelivery = document.querySelector("#getTypeDelivery").value;
            const typePayment = document.querySelector("#getTypePayment").value;

            requestCrochet(nameCrochet, categCrochet, priceCrochet, nameClient, qntCrochet, typePayment, typeDelivery);
        }
    });

    // Append the popupContainer to the document or wherever appropriate
    document.body.appendChild(popupContainer);

    document.addEventListener("click", function(event) {
        if (!modal.contains(event.target) && !requestCrochetBtn.contains(event.target)) {
            // Se o clique ocorreu fora do modal e fora do botão que abre o modal
            closePopup();
        }
    });
}



function requestCrochet(nameCrochet, categCrochet, priceCrochet, nameClient, qntCrochet, typePayment, typeDelivery) {
    alert(`${nameCrochet} ${categCrochet} ${priceCrochet} ${nameClient} ${qntCrochet} ${typePayment} ${typeDelivery}`)

    let message = `Oi! 👋 Meu nome é ${nameClient}, estou interessado no(a) ${categCrochet} de ${nameCrochet}. O tipo de entrega que eu quero é ${typeDelivery} e o pagamento será feito com ${typePayment}`

    linkWhatsapp = `https://api.whatsapp.com/send?phone=+5582988950899&text=` + encodeURIComponent(message)

    

    window.location.href = linkWhatsapp;
}

function closePopup() {
    const requestCrochetPopup = document.querySelector(".requestPopup")

    requestCrochetPopup.remove()
}