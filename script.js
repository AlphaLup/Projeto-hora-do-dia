var tempoAtual = new Date();
var horas = tempoAtual.getHours();
var minutos = tempoAtual.getMinutes()<10?'0':'' + tempoAtual.getMinutes();
var horaAtual = `${horas}:${minutos}`

var subtitulo = window.document.getElementById("subtitulo");
var horario = window.document.getElementById("horario");
var imagem = window.document.getElementById("imagem");
var main = window.document.getElementsByTagName("main")[0];
var body = window.document.getElementsByTagName("body")[0];

if(5 < horas && horas < 12){
    subtitulo.innerHTML = "<h2>Manhã</h2>";
    horario.innerHTML = horaAtual;
    imagem.src = "./midia/morning.jpg";
    main.style.backgroundColor = "#fdcf78";
    body.style.backgroundColor = "#ff9900"
}
else if(12 < horas && horas < 18){
    subtitulo.innerHTML = "<h2>Tarde</h2>";
    horario.innerHTML = horaAtual;
    imagem.src = "./midia/afternoon.jpg";
    main.style.backgroundColor = "#f5ffa0"
    body.style.backgroundColor = "#f2ff39"
}
else{
    subtitulo.innerHTML = "<h2>Noite</h2>";
    horario.innerHTML = horaAtual;
    imagem.src = "./midia/night.jpg";
    main.style.backgroundColor= "#838fff"
    body.style.backgroundColor = "#0044ff"
}
