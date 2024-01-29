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

const requestCrochetBtn = document.querySelector("#requestCrochet")
const modal = document.querySelector("dialog")
const closePopup = document.querySelector("#closePopup")

function requestCrochet(nameNum, categoryNum, price) {
    const nameCrochet = [
        "a Circus Baby",
        "o Pato", 
        "o Yoda"]
    
    const categoryCrochet = [
        "Chaveiro [C]",
        "Boneco(a) [P]",
        "Boneco(a) [M]",
        "Boneco(a) [G]"
    ]

    const nameClient = prompt("Adicione o nome")
    const typeDelivery = prompt("Adicione tipo de entrega")
    const typePayment = prompt("Adicione tipo de pagamento")

        let message = `Oi! 👋 Meu nome é ${nameClient}, estou interessado no(a) ${categoryCrochet[categoryNum]} d${nameCrochet[nameNum]}. O tipo de entrega que eu quero é ${typeDelivery} e o pagamento será feito com ${typePayment}`

        linkWhatsapp = `https://api.whatsapp.com/send?phone=+5582988950899&text=` + encodeURIComponent(message)

        window.location.href = linkWhatsapp;

        modal.showModal()
}

closePopup.onclick = function() {
    modal.close()
}

function mensagemCatalogo(nameCrochet, categoryCrochet, nameClient, typeDelivery, typePayment){
    let message = `Oi! 👋 Meu nome é ${nameClient}, estou interessado no(a) ${categoryCrochet} de ${nameCrochet}. O tipo de entrega que eu quero é ${typeDelivery} e o pagamento será feito com ${typePayment}`

    linkWhatsapp = `https://api.whatsapp.com/send?phone=+5582988950899&text=` + encodeURIComponent(message)

    return linkWhatsapp
}