function brK(){
    var br = prompt("Unesite broj kvadratica: ");
    var br1 = parseInt(br);
    return br1;
}

const brKvad = brK();
var mjZaKvad = document.getElementById("mjestoZaKvadratice");
var dodaj = document.getElementById("dodaj");
var provjeri = document.getElementById("provjera");
var ukupnoKvad= brKvad;

function dodajKvadratic(){
    let a, b, c, d, bText, newDiv;

    newDiv = document.createElement("div");
    newDiv.className = `new`;
    mjZaKvad.appendChild(newDiv);
    a = document.createElement("div");
    b = document.createElement("BUTTON");
    bText = document.createTextNode("X");
    b.style.backgroundColor = "red";
    b.className = "X";
    b.appendChild(bText);
    a.appendChild(b);
    newDiv.appendChild(a);
    c = document.createElement("div");
    d = document.createElement("input");
    d.type = "text";
    d.className = `input-`;
    d.pattern = "[A-Za-z -]";
    d.required = true;
    d.size=1;
    d.maxLength= 1;
    d.title = "Molim vas unesite velika ili mala slova";
    c.appendChild(d);
    newDiv.appendChild(c);
}

for(let i = 0; i<brKvad;i++){
    dodajKvadratic();
}

dodaj.addEventListener("click", function(){
    dodajKvadratic();
    ukupnoKvad++;
});

function jePalindrom(str){
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

function obrisiKvadratic(e){
    if(e.target.classList.contains("X")){
        var a = e.target.parentNode.parentNode;
        mjZaKvad.removeChild(a);
        ukupnoKvad--;
    }
}
mjZaKvad.addEventListener("click", obrisiKvadratic);
/*
if(jePalindrom("anaa")){
    console.log("jeste")
}
else{
    console.log("nije")
}*/

function provjeriP(){
    var string = "";
    var slova = /^[A-Za-z -]+$/;
    for(let i =0;i<ukupnoKvad;i++){
       var g = document.getElementsByClassName("new")[i].lastElementChild.lastElementChild.value;
       if(!g.match(slova)){
            alert("Korisnik mora da unese samo slova, stranica ce se ponovo pokrenuti");
            location.reload();
       }
       string+=g;
    }
    if(jePalindrom(string)){
        document.getElementById("j1").style.display="block";
        document.getElementById("j2").style.display="none";
    }else{
        document.getElementById("j2").style.display="block";
        document.getElementById("j1").style.display="none";
    }
    
}
provjeri.addEventListener("click", provjeriP);