//Peter
function zistiCiObrazok(path) {
	var str = path;
    var pomString = str.substring(0,7);
	if (pomString === "obrazky"){
		var x = extrahujNazovObrazka(str);
		return x;
	}else{
		return str;
	}
}

function extrahujNazovObrazka(path){
	var str = path;
	var res = str.substring(str.indexOf("/")+1,str.indexOf("."));
    return res;
}

function jsonToArray(){
	var jsonData = JSON.parse(vybrane);
	var pocitadlo = 0;
	for (var i in jsonData){
			var pom = jsonData[i];	
	}

	pom.pexesoRandomPolicka();
	var array = [];
	for (var i = 0; i < dlzkaVyb; i++) {
	//for (var i= 0; i<pom.length; i++){
		array.push(pom[i].slovo);
		array.push(pom[i].slovo);
		//array.push(pom[i].url);
	}
	return array;	
}


var pexeso_hodnoty = [];
var pexeso_policka_id = [];
var policka_otocene = 0;
var pocitadlo_clickov = 0;

Array.prototype.pexesoRandomPolicka = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	var policka_otocene = 0;
	var output = '';
	pexeso_pole = jsonToArray();
    pexeso_pole.pexesoRandomPolicka();

	for(var i = 0; i < pexeso_pole.length; i++){
		var pom = zistiCiObrazok(pexeso_pole[i]);
		
		output += '<div id="tile_'+i+'" onclick="pexesoOtocPolicko(this,\''+pom+'\')"></div>';	
	}	
	

  koniec.style.visibility = 'hidden';      // Hide
  //output += '<div id="tile_2" onclick="pexesoOtocPolicko(this,\'byk\')"></div>';
	//output += '<div id="tile_3" onclick="pexesoOtocPolicko(this,\'byk\')"> <img src="obrazky/byk.jpg" height=60px, width=60px/> </div>';
	memory_board.innerHTML = output;
  

}

function vysledok(pocet){
	var uroven = '';
	if(pocet<=70) {
		uroven = 'Si PROFÍK.';
	}else if(pocet >70 && pocet<=80) {
		uroven = 'Si takmer profesionál.';
	}else if(pocet >80 && pocet<=90) {
		uroven = 'Si mierne pokročílý/á.';
	}else{
		uroven = 'Si začiatočník.';
	}


  koniec.innerHTML = 'Gratulujem. ' + uroven + '<br><br> Počet kliknutí spolu: ' + pocet +'.<br><br>' + 'Z toho si spravil/a ' + 2*dlzkaVyb + ' správnych a ' + (pocet-(2*dlzkaVyb)) + ' zlých kliknutí.<br><br><button id="restart">Reštart</button>';
  res = koniec.getElementById("restart");
  
  //vyrob dátum 
    var dateObj = new Date(); //zobere aktualny datum
    var month = dateObj.getMonth() + 1; //zapameta si mesiac
    var day = dateObj.getDate(); //zapametá si den
  if (localStorage.vysledky) {
            localStorage.vysledky=localStorage.vysledky + "<p>"+day+"."+month+"  Pexeso : "+uroven+"</p>";
        }
        else{
          localStorage.vysledky= "<p>"+day+"."+month+"  Pexeso : "+uroven+"</p>"; 
        }
        
  res.addEventListener("click", function (e) {
      policka_otocene = 0;
      newBoard();
    }, false);
  
  koniec.style.visibility = 'visible';     // Show
  
}

function pexesoOtocPolicko(policko,val){
	if(policko.innerHTML == "" && pexeso_hodnoty.length < 2){
		policko.style.background = 'url(obrazky/tile_bg2.png) no-repeat';
		policko.innerHTML = val;
		if(pexeso_hodnoty.length == 0){
			pexeso_hodnoty.push(val);
			pexeso_policka_id.push(policko.id);
			pocitadlo_clickov += 1;
			counter.innerHTML = pocitadlo_clickov;
		} else if(pexeso_hodnoty.length == 1){
			pexeso_hodnoty.push(val);
			pexeso_policka_id.push(policko.id);
			pocitadlo_clickov += 1;
			counter.innerHTML = pocitadlo_clickov;
			if(pexeso_hodnoty[0] == pexeso_hodnoty[1]){
				policka_otocene += 2;
				// Zmaze obe polia
				pexeso_hodnoty = [];
            	pexeso_policka_id = [];
				// Pozre ci cela hracia plocha bola otocena
				if(policka_otocene == pexeso_pole.length){
					vysledok(pocitadlo_clickov);
					pocitadlo_clickov = 0;
					counter.innerHTML = pocitadlo_clickov;
				}
			} else {
				function otocNazad(){
				    // Otoci policko naspat
				    var tile_1 = document.getElementById(pexeso_policka_id[0]);
				    var tile_2 = document.getElementById(pexeso_policka_id[1]);
				    tile_1.style.background = 'url(obrazky/tile_bg0.png) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(obrazky/tile_bg0.png) no-repeat';
					tile_2.innerHTML = "";
				    // Zmaze obe polia
				    pexeso_hodnoty = [];
            	    pexeso_policka_id = [];
				}
				setTimeout(otocNazad, 1000);
			}
		}
	}
}
newBoard();
