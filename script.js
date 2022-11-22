async function buscaEndereco(cep) {
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error("CEP não existente!");
    }
    //acessando o documento html e atribuin variaveis
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');

    //mudandos os valores dentrodos campos dos formulario
    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value =consultaCEPConvertida.logradouro;
    estado.value =consultaCEPConvertida.uf;

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch (erro) {
    console.log(erro);
  }
}

var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value)); //focusout


