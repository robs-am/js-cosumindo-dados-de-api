console.log("Mandando oi para o amigo");

function mandaMensagem() {
    console.log("Tudo bem?");
    console.log("Vou te mandar uma solicitação");
    console.log("Solicitação recebida!");
}

mandaMensagem();
setTimeout(mandaMensagem, 5000); //callback
console.log("Tchau Tchau");