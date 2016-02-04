
var oknoVybraneCvicenia;
var cvicenie1_2, cvicenie3, vys;

(function () {

  oknoVybraneCvicenia = function () {
    RWindow.call (this, 20, 40, 177, 260, 'logo_vybrane_male.png');

    var self = this;

    this.change_cfg ({bgcolor:'rgb(164, 234, 164)', selcolor:'rgb(81, 218, 129)'});
    this.resizeable = true;
    this.dragable = true;
    this.lab.innerHTML = 'Vybrané slová';
    this.lab.style.textAlign = 'center';
    this.lab.style.marginLeft = '0px';
    
    //Adrian
    
    zobrazCvicenia();
    
    function zobrazCvicenia() {
      self.con.innerHTML ='<div id="cviceniaButtons"><p><button id="cv1">Cvičenie 1</button></p>  \
      <p><button id="cv2">Cvičenie 2</button></p>  \
      <p><button id="cv3">Cvičenie 3</button></p>  \
      <p><button id="vysledky">Výsledky</button></p></div> '
      
      cv1 = self.con.getElementById("cv1");
      cv1.addEventListener("click", vytvorCvicenie1);
      
      cv2 = self.con.getElementById("cv2");
      cv2.addEventListener("click", vytvorCvicenie2);
      
      cv3 = self.con.getElementById("cv3");
      cv3.addEventListener("click", vytvorCvicenie3);
      
      vysledky = self.con.getElementById("vysledky");
      vysledky.addEventListener("click", zobrazVysledky);
	  }
    
    function vytvorCvicenie1() {
      if (cvicenie1_2) {cvicenie1_2.hide()}
      if (vys) {vys.hide()}
      cvicenie1_2 = new oknoVybraneCvicenie1 ();
    }
    
    function vytvorCvicenie2() {
      if (cvicenie1_2) {cvicenie1_2.hide()}
      if (vys) {vys.hide()}
      cvicenie1_2 = new oknoVybraneCvicenie2 ();
    }
    
    function vytvorCvicenie3() {
      if (cvicenie3) {cvicenie3.hide()}
      if (vys) {vys.hide()}
      cvicenie3 = new oknoVybraneCvicenie3 ();
    }
    
    function zobrazVysledky() {
      if (cvicenie1_2) {cvicenie1_2.hide()}
      if (cvicenie3) {cvicenie3.hide()}
      if (vys) {vys.hide()}
      vys = new oknoVysledkyCviceni ();
    }
   
    this.Bclose.style.visibility = 'visible';
    this.Bclose.addEventListener ('mousedown', function (e) {
      self.hide ();
      menu.Add (self.ico);
      e.stopPropagation ();
    });


    this.ico = Asset.image ('obrazky/logo_vybrane_velke.png');
    menu.Add (this.ico);
    this.ico.addEventListener ('mousedown', function (e) {
      self.show ();
      menu.Rem (self.ico);
      e.stopPropagation ();
    });  
  };

  (function (){
    function Tmp () {};
    Tmp.prototype = RWindow.prototype;
    oknoVybraneCvicenia.prototype = new Tmp ();
  })();
})();