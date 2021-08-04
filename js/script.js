var inputCep = document.querySelector("#inputCEP");
var btnSearch = document.querySelector("#btnSearch");

btnSearch.addEventListener("click", function(event){
    event.preventDefault();

    
    var cep = inputCep.value.replace('-', '');

    console.log(cep);

    var proxy = 'https://cors-anywhere.herokuapp.com/'
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    var xhr = new XMLHttpRequest();
        //proxy de cors
    xhr.open('GET',proxy+url, true);

    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

    //metódo que trata o retorno da requisição
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            console.log(xhr.responseText)
                preencheCampos(JSON.parse(xhr.responseText));
            
        }else{
            var errorAjax = xhr.status;
                console.log(errorAjax)
        }
    });

    //metódo que envia a requisição
    xhr.send();    
});

//utilitarios

var $ = document.querySelector.bind(document); 
var form = document.querySelector("#formCep");

function preencheCampos(json){     
        $("#inputRua").value = json.logradouro;
        $("#inputBairro").value = json.bairro; 
        $("#inputCity").value = json.localidade; 
        $("#inputUf").value = json.uf; 
        $("#inputComp").value = json.complemento;
};

form.addEventListener("dblclick", function (){
    
    inputCep.value = "";
    $("#inputRua").value = "";
    $("#inputBairro").value = ""; 
    $("#inputCity").value = ""; 
    $("#inputUf").value = ""; 
    $("#inputComp").value = "";
    
    inputCep.focus();

})
