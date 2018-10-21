var igracNaRedu = "X";

function ifZaPobjedu(igrac, polje1, polje2, polje3){
    if(document.getElementById(polje1).textContent==igrac && 
    document.getElementById(polje2).textContent==igrac && 
    document.getElementById(polje3).textContent==igrac){
        return true;
    }
}

function pobjeda(igracR){
    return (ifZaPobjedu(igracR, 0, 1, 2) || ifZaPobjedu(igracR, 3, 4, 5) || ifZaPobjedu(igracR, 6, 7, 8)||
            ifZaPobjedu(igracR, 0, 3, 6) || ifZaPobjedu(igracR, 1, 4, 7) || ifZaPobjedu(igracR, 2, 5, 8)||
            ifZaPobjedu(igracR, 0, 4, 8) || ifZaPobjedu(igracR, 2, 4, 6));
}

var counter=0;
var igra= document.getElementById("igra")
igra.addEventListener("click",function(e){
    var sadrzaj = document.getElementById(e.target.id);
    if(sadrzaj.textContent===""){
            sadrzaj.textContent = igracNaRedu;
            
            counter++;
            if(igracNaRedu==="X"){
                igracNaRedu="O";
                sadrzaj.style.color="blue";
            }
            else{
                igracNaRedu="X";
                sadrzaj.style.color="red";
            }
        }
        if(pobjeda("X")){
            alert("Igrac X je pobijedio");
            igracNaRedu="";
        }
        else if(pobjeda("O")){
            alert("Igrac O je pobijedio");
            igracNaRedu="";
        }
        else if(counter>=9 && !pobjeda("X") && !pobjeda("O")){
            alert("Igra je nerijesena");
            setTimeout(location.reload(), 10000);
        }
    
    
    
});

document.getElementById("btn").addEventListener("click",function(){
    location.reload();
});