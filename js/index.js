"option strict";
let numLanci=0;

function lanciaDado(){
    let rnd = Math.floor(Math.random()*(6-1+1))+1;
    let img = document.getElementById("imgDado");
    img.src = "img/png"+rnd+".png";
    document.getElementById("f"+rnd).innerHTML=
        parseInt(document.getElementById("f"+rnd).innerHTML) +1;
    numLanci++;
    if(numLanci==10)
        btnLancia.disabled=true;
}

function calcolaMigliore(){
    let vetFrequenza = document.getElementsByTagName("span");
    let indiceMax=0;
    for(let i=1;i<vetFrequenza.length;i++){
        if(parseInt(vetFrequenza[i].innerHTML) > parseInt(vetFrequenza[indiceMax].innerHTML))
            indiceMax=i;
    }
    ris.innerHTML = "La faccia maggiore è il numero " + (indiceMax+1);
}