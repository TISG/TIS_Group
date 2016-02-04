/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
*/
//by Martin
function slovo(id, text, audio, obrazok, je_vybrane) {
    this.id = id;
    this.text = text;
    this.audio = audio;
    this.obrazok = obrazok;
    this.vybrane=je_vybrane;
}
//konštruktor úlohy
function uloha(id_cvicenia,id, slova, riesenie) {
    this.id_cv=id_cvicenia;
    this.id=id;
    this.slova=slova;
    this.riesenie=riesenie;
    this.skontroluj=function(vysledok){
       if (this.riesenie===vysledok){
         return true;}
       return false;
    };
}

//vrati moznost s i a y
//vytvori hlboku kopiu objektu text a upravi ho na spravny tvar
function daj_moznosti_iy(text){    
    var pom1 = JSON.parse(JSON.stringify(text));
    pom1=pom1.replace(/y|ý|i|í/i,function (m) {
    return {
        'y': 'i',
        'i': 'i',
        'ý': 'í',
        'í': 'í'        
    }[m];
});
    var pom2 = JSON.parse(JSON.stringify(text));   
    pom2=pom2.replace(/y|ý|i|í/i,function (pismeno) {
    return {
        'y': 'y',
        'i': 'y',
        'ý': 'ý',
        'í': 'ý'        
    }[pismeno];
});
   return [pom1,pom2]; 
   }


//vráti úlohu, resp. slová v nej a jej id
function vypis_ulohu(uloha){
    if (uloha.slova.length>0){
      return [uloha.id, uloha.slova];
    }
    return null;

}

function skontroluj_ulohu(uloha, riesenie){
    if (riesenie===uloha.riesenie){
      return true;
    }
    return false;
}

function cvicenie(id, ulohy, nazov, popis, napoveda){
  this.id=id;
  this.ulohy=ulohy;
  this.nazov=nazov;
  this.popis=popis;
  this.napoveda=napoveda;
  this.vypis_cvicenie=function(pocet){
  //ak je pocet vybraných vyžší ako počet úloh, potom to znamená že niektoré by sa opakovali
   if (pocet>this.ulohy.length){
   return null;}
   var vybrane= [];
   var ktore=0;
   
   //vytvorím si zoznam indexov úloh, ktoré použijem
   while(vybrane.length<pocet){
    ktore=Math.floor(Math.random() * this.ulohy.length); 
    if (skontroluj(vybrane, ktore)){
      vybrane.push(ktore);
      }
    }
    var vysledne=[];
    
    //teraz máme zoznam indexov úloh, ktoré použijeme na výber zoznamu úloh
    for (var i=0; i<vybrane.length; i++){
      vysledne.push(this.ulohy[vybrane[i]]);
    }
    //skutocny vypis
    //return [this.id, this.nazov, this.popis, vysledne]; 
    //zmena na objekt
    return {idcko:this.id, napis:this.nazov, pozn:this.popis, ul:vysledne};
    //testovaci scenar  doplnanie.vypis_cvicenie(1).ul[0].slova.text 
  };

}
//skotroluj, či je premenná časť v poli
function skontroluj(pole, cast){
   if (jePole(pole)) {
    for (var i=0; i<pole.length; i++){
      if (pole[i]==cast){
      return false;}
    }
   }
   return true;
}


//vráti boolean hodnotu, ci je objekt pole
function jePole(objekt) {
    return objekt.constructor.toString().indexOf("Array") > -1;
}
//vymení prvý výskyt y/ý, čo je písmeno, ktoré je namiesto i/í vo vybranom slove, za podtržník
//text sa dá potom preparsovať a dá sa nájsť miesto, kde treba doplniť písmeno
//volá sa pri vypisovaní textu na doplnenie
function vytvor_dopln_pismeno(text){
  return text.replace(/{y|ý|i|í}/i,"_");
}


//vytvorí úlohy na dopĺňanie slov
//pre každé slovo vytvorí vlastnú úlohu
function vytvor_ulohy_doplnanie(slova){
   var ulohy=[];
   for (var i=0;i<slova.length;i++){
   //do množiny úloh pridá dopĺňanie písmena
    ulohy.push(new uloha(0,i,slova[i],slova[i].text));
   }
return ulohy;
}

//parametre slova su id, text, audio, obrazok, je_vybrane
var placeholder= [new slovo(1000,"bryndza","","obrazky/r/bryndza.jpg",true), new slovo(1001,"korytnačka","","obrazky/r/korytnacka.jpg",true), new slovo(1002,"koryto","","obrazky/r/koryto.jpg",true), new slovo(1003,"kryha","","obrazky/r/kryha.jpg",true), new slovo(1004,"ryba","","obrazky/r/ryba.jpg",true), new slovo(1005,"rýdzik","","obrazky/r/rydzik.jpg",true), new slovo(1006,"rýchly","","obrazky/r/rychly.jpg",true), new slovo(1007,"rýľ","","obrazky/r/ryl.jpg",true), new slovo(1008,"rys","","obrazky/r/rys.jpg",true), new slovo(1009,"ryšavý","","obrazky/r/rysavy.jpg",true), new slovo(1010,"rytier","","obrazky/r/rytier.jpg",true), new slovo(1011,"ryža","","obrazky/r/ryza.jpg",true), new slovo(1012,"strýc","","obrazky/r/stryc.jpg",true), new slovo(1013,"Torysa","","obrazky/r/torysa.jpg",true),
                  new slovo(1014,"osýpky","","obrazky/s/osypky.jpg",true), new slovo(1015,"sychravý","","obrazky/s/sychravy.jpg",true), new slovo(1016,"sýkorka","","obrazky/s/sykorka.jpg",true), new slovo(1017,"syn","","obrazky/s/syn.jpg",true), new slovo(1018,"syr","","obrazky/s/syr.jpg",true), new slovo(1019,"syseľ","","obrazky/s/sysel.jpg",true),
                  new slovo(1020,"vydra","","obrazky/v/vydra.jpg",true), new slovo(1021,"vyhňa","","obrazky/v/vyhna.jpg",true), new slovo(1022,"výr (sova)","","obrazky/v/vyr_sova.jpg",true), new slovo(1023,"výraz","","obrazky/v/vyraz.jpg",true), new slovo(1024,"vyrážka","","obrazky/v/vyrazka.jpg",true), new slovo(1025,"výskum","","obrazky/v/vyskum.jpg",true), new slovo(1026,"vysoký","","obrazky/v/vysoky.jpg",true),
                  new slovo(1027,"výsosť","","obrazky/v/vysost.jpg",true), new slovo(1028,"výstava","","obrazky/v/vystava.jpg",true), new slovo(1029,"vyť","","obrazky/v/vyt.jpg",true), new slovo(1030,"výťah","","obrazky/v/vytah.jpg",true), new slovo(1031,"vyučovanie","","obrazky/v/vyucovanie.jpg",true), new slovo(1032,"výživa","","obrazky/v/vyziva.jpg",true), new slovo(1033,"vyžla","","obrazky/v/vyzla.jpg",true), new slovo(1034,"zvyk","","obrazky/v/zvyk.png",true), new slovo(1035,"jazyk","","obrazky/z/jazyk.png",true),
                  new slovo(1036,"býk","","obrazky/b/byk.jpg",true) , new slovo(1037,"bylina","","obrazky/b/bylina.jpg",true), new slovo(1038,"Bystrica","","obrazky/b/bystrica.jpg",true), new slovo(1039,"bystrý","","obrazky/b/bystrý.jpg",true), new slovo(1200,"byt","","obrazky/b/byt.jpg",true), new slovo(1040,"Bytča","","obrazky/b/bytča.jpg",true), new slovo(1041,"bytosť","","obrazky/b/bytosť.jpg",true), new slovo(1042,"dobyť (pevnosť)","","obrazky/b/dobyť.jpg",true), new slovo(1043,"dobytok","","obrazky/b/dobytok.jpg",true), new slovo(1044,"kobyla","","obrazky/b/kobyla.jpg",true),
                  new slovo(1045,"nábytok","","obrazky/b/nábytok.jpg",true), new slovo(1046,"hmyz","","obrazky/m/hmyz.jpg",true), new slovo(1047,"mydlo","","obrazky/m/mydlo.jpg",true), new slovo(1048,"hmyz","","obrazky/m/hmyz.jpg",true), new slovo(1049,"Myjava","","obrazky/m/myjava.png",true), new slovo(1050,"mýliť sa","","obrazky/m/mylitsa.png",true), new slovo(1051,"myš","","obrazky/m/myš.jpg",true), new slovo(1052,"myšlienka","","obrazky/m/myslienka.png",true), new slovo(1053,"myslieť","","obrazky/m/mysliet.jpg",true), new slovo(1054,"pomyje","","obrazky/m/pomyje.png",true), new slovo(1055,"šmýkať sa","","obrazky/m/smykatsa.jpg",true),
                  new slovo(1056,"umývať sa","","obrazky/m/umyvat.jpg",true), new slovo(1057,"zamykať","","obrazky/m/zamykat.jpg",true), new slovo(1058,"kopyto","","obrazky/p/kopyto.jpg",true), new slovo(1059,"prepych","","obrazky/p/prepych.jpg",true), new slovo(1060,"pýcha","","obrazky/p/pycha.jpg",true), new slovo(1061,"pykať","","obrazky/p/pykat.jpg",true), new slovo(1062,"pyré","","obrazky/p/pyre.jpg",true), new slovo(1063,"pysk","","obrazky/p/pysk.jpg",true), new slovo(1064,"pýtať sa","","obrazky/p/pytatsa.jpg",true), new slovo(1065,"pytliak","","obrazky/p/pytliak.jpg",true), new slovo(1066,"pyžamo","","obrazky/p/pyzamo.jpg",true),
                  new slovo(1067,"biblia","","obrazky/nevybrane/biblia.jpg",false), new slovo(1068,"bič","","obrazky/nevybrane/bic.jpg",false), new slovo(1069,"bicie","","obrazky/nevybrane/bicie.jpg",false), new slovo(1070,"bicykel","","obrazky/nevybrane/bicykel.jpg",false), new slovo(1071,"bieda","","obrazky/nevybrane/bieda.JPG",false), new slovo(1072,"bitúnok","","obrazky/nevybrane/bitunok.jpg",false), new slovo(1073,"fúrik","","obrazky/nevybrane/furik.jpg",false), new slovo(1074,"mandarínka","","obrazky/nevybrane/mandarinka.jpg",false), new slovo(1075,"miecha","","obrazky/nevybrane/miecha.jpg",false), new slovo(1076,"papier","","obrazky/nevybrane/papier.jpg",false),
                  new slovo(1077,"piáno","","obrazky/nevybrane/piano.jpg",false), new slovo(1078,"pich","","obrazky/nevybrane/pich.jpg",false), new slovo(1079,"pirohy","","obrazky/nevybrane/pirohy.jpg",false), new slovo(1080,"písmeno","","obrazky/nevybrane/pismeno.jpg",false), new slovo(1081,"píštalka","","obrazky/nevybrane/pistalka.jpg",false), new slovo(1082,"pitie","","obrazky/nevybrane/pitie.jpg",false), new slovo(1083,"riad","","obrazky/nevybrane/riad.jpg",false), new slovo(1084,"riaditeľ","","obrazky/nevybrane/riaditel.jpg",false), new slovo(1085,"riasy","","obrazky/nevybrane/riasy.jpg",false), new slovo(1086,"riman","","obrazky/nevybrane/riman.jpg",false),
                  new slovo(1087,"rizoto","","obrazky/nevybrane/rizoto.jpg",false), new slovo(1088,"silvester","","obrazky/nevybrane/silvester.jpg",false), new slovo(1089,"síra","","obrazky/nevybrane/sira.png",false), new slovo(1090,"viazanie","","obrazky/nevybrane/viazanie.jpg",false), new slovo(1091,"video","","obrazky/nevybrane/video.jpg",false), new slovo(1092,"vidiek","","obrazky/nevybrane/vidiek.jpeg",false), new slovo(1093,"vidly","","obrazky/nevybrane/vidly.jpg",false), new slovo(1094,"violončelo","","obrazky/nevybrane/violoncelo.jpg",false), new slovo(1095,"vitamíny","","obrazky/nevybrane/vitaminy.jpg",false), new slovo(1096,"víťaz","","obrazky/nevybrane/vitaz.jpg",false),
                  new slovo(1097,"miazga","","obrazky/nevybrane/miazga.jpg",false), new slovo(1098,"migrant","","obrazky/nevybrane/migrant.jpg",false), new slovo(1099,"Mikuláš","","obrazky/nevybrane/mikulas.jpg",false), new slovo(1100,"minca","","obrazky/nevybrane/minca.jpg",false), new slovo(1101,"rieka","","obrazky/nevybrane/rieka.jpg",false), new slovo(1102,"rifle","","obrazky/nevybrane/rifle.jpeg",false), new slovo(1103,"risk","","obrazky/nevybrane/risk.jpg",false), new slovo(1104,"Sibír","","obrazky/nevybrane/sibir.jpg",false), new slovo(1105,"silo","","obrazky/nevybrane/silo.jpg",false), new slovo(1106,"siréna","","obrazky/nevybrane/sirena.jpg",false)];
var doplnanie=new cvicenie(0, vytvor_ulohy_doplnanie(placeholder),"Doplň písmeno", "Dopĺňanie správneho i/y do slov", "sem daj nápovedu");

function nacitaj_slovo(id){
//v module databázy

return slovo;
}

function nacitaj_slova(pocet){
var vys=[];
for (var i=0;i<pocet;i++){
 //treba dopniť podmienky generovania id
  vys.push(nacitaj_slovo(id));
  }
}


var odchyteneData=doplnanie.vypis_cvicenie(15);


function vytvor_quiz(odchyteneData){
  var pomocna=[];
  for (var j=0;j<odchyteneData.ul.length;j++){
    pomocna.push({"otazka":odchyteneData.ul[j].slova.obrazok, "moznosti":daj_moznosti_iy(odchyteneData.ul[j].slova.text), "odpoved":odchyteneData.ul[j].riesenie});    
  }
    return pomocna;
};

var quiz = vytvor_quiz(odchyteneData);

//by Peter
var aktualnaOtazka = 0,
  skore = 0,
  dalsiaOtazka = true;

function otazky() {
  var moznosti = quiz[aktualnaOtazka].moznosti,
    moznostiHtml = "";

  // prechadzam cez moznosti a vytvaram buttony pre odpovede
  
  for (var i = 0; i < moznosti.length; i++) {
    moznostiHtml += "<p><input type='radio' name='quiz" + aktualnaOtazka +
      "' id='choice" + (i + 1) +
      "' value='" + moznosti[i] + "'>" +
      " <label for='choice" + (i + 1) + "'>" + moznosti[i] + "</label><br>";
  }

  // nacita otazky
  //otazkaContainer.textContent = document.getElementById('otazka').src = quiz[aktualnaOtazka].otazka;
  otazkaContainer.src = quiz[aktualnaOtazka].otazka;
  
  // nacita moznosti
  moznostiContainer.innerHTML = moznostiHtml;

  // nastavenie pri prvom spusteni
  if (aktualnaOtazka === 0) {
    //console.log("Prve spustenie");
    skoreContainer.textContent = "Skóre: 0 správnych odpovedí z " +
      quiz.length + " možných.";
    
    $jq("#submit").css({'background-image' : 'url(obrazky/check.png)',
      'background-repeat': 'no-repeat'});     
  }
}

function skontrolujOdpoved() {
  // pytame sa otazku, alebo ideme na dalsiu
  if (dalsiaOtazka) {
    $jq("#submit").css({'background-image' : 'url(obrazky/next.png)',
      'background-repeat': 'no-repeat'});
    //submitBtn.textContent = "Ďalšia otázka";
    dalsiaOtazka = false;

    // rozhoduje ktory button stlacili
    var odpovedUzivatela,
      odpovedIndex,
      radios = document.getElementsByName("quiz" + aktualnaOtazka);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) { // ak je tento button oznaceny
        odpovedUzivatela = radios[i].value;
      }

      // ziskaj index spravnej odpovede
      if (radios[i].value == quiz[aktualnaOtazka].odpoved) {
        odpovedIndex = i;
      }
    }

    // zistuje ci odpovedali spravne alebo nie
    var labelStyle = document.getElementsByTagName("label")[odpovedIndex].style;
    labelStyle.fontWeight = "bold";
    if (odpovedUzivatela == quiz[aktualnaOtazka].odpoved) {
      skore++;
      labelStyle.color = "green";
    } else {
      labelStyle.color = "red";
    }

    skoreContainer.textContent = "Skóre: " + skore + " správnych odpovedí z " +
      quiz.length + " možných.";
  } else { 
     // presunieme sa na dalsiu otazku
    dalsiaOtazka = true;
    // zmeni text buttona na "Odosli odpoved"
    $jq("#submit").css({'background-image' : 'url(obrazky/check.png)',
      'background-repeat': 'no-repeat'});
    // pokial nie sme na poslednej otazke, zvyzsi cislo aktualnej otazky, inac zobrazi vysledok.
    console.log(aktualnaOtazka);
    if (aktualnaOtazka < quiz.length - 1) {
      aktualnaOtazka++;
      otazky();
    } else {
      ukazVysledok();
    }
  }
}

// zobrazi vysledok a percentualne honodtenie.
function ukazVysledok() {
  cvicenie1_2.change_size(500, 220);
  content.innerHTML =  "<h2>Správne si odpovedal(a) na:</h2>" +
    "<h2>" + skore + " z " + quiz.length + " otázok, úspešnosť " +
    Math.round(skore / quiz.length * 100) + "%<h2>";
    //vyrob dátum 
    var dateObj = new Date(); //zobere aktualny datum
    var month = dateObj.getMonth() + 1; //zapameta si mesiac
    var day = dateObj.getDate(); //zapametá si den
    if (localStorage.vysledky) {
            localStorage.vysledky=localStorage.vysledky + "<p>"+day+"."+month+"  Dopĺňanie i/y : "+Math.round(skore / quiz.length * 100)+"%</p>";
        }
        else{
          localStorage.vysledky= "<p>"+day+"."+month+"  Dopĺňanie i/y : "+Math.round(skore / quiz.length * 100)+"%</p>"; 
        }
}

otazky();
submitBtn.addEventListener("click", skontrolujOdpoved, false);




