

var oknoVysledkyCviceni;

(function () {

  oknoVysledkyCviceni = function () {
    RWindow.call (this, 240, 40, 250, 350, 'logo_vybrane_male.png');

    var self = this;

    this.change_cfg ({bgcolor:'rgb(164, 234, 164)', selcolor:'rgb(81, 218, 129)'});
    this.resizeable = true;
    this.dragable = true;
    this.lab.innerHTML = 'Výsledky cvičení';
    this.lab.style.textAlign = 'center';
    this.lab.style.marginLeft = '0px';
    
    //Adrian, Martin
    self.show();
     
    zobrazVysledky();
    
    if (localStorage.vysledky) {
        vymaz = self.con.getElementById("zmazVysledky");
        vymaz.addEventListener("click", function (e) {
            premazLokalneVysledky();
            vys.hide();
            vys = new oknoVysledkyCviceni ();
        }, false);
    }
    
    function zobrazVysledky() {
        self.con.innerHTML = '<div id = "vysledkyZoznam"><p><h3>Tvoje výsledky:</h3></p>';
        if (localStorage.vysledky) {
            self.con.innerHTML+= localStorage.vysledky;
            $jq("#vysledkyZoznam").append('<button id="zmazVysledky">Vymaž výsledky</button></p>');        
        } else {
             self.con.innerHTML+='<p> Nemáš uložené žiadne výsledky na tomto počítači.</p>';
          }
        self.con.innerHTML+='</div>';
    }
    
    function premazLokalneVysledky(){
        //premaže lokalne výsleky
        if (localStorage.vysledky) {
            localStorage.removeItem("vysledky");
        }
    }

       
    this.Bclose.style.visibility = 'visible';
    this.Bclose.addEventListener ('mousedown', function (e) {
      self.hide ();
      menu.Add (self.ico);
      e.stopPropagation ();
    });
  };

  (function (){
    function Tmp () {};
    Tmp.prototype = RWindow.prototype;
    oknoVysledkyCviceni.prototype = new Tmp ();
  })();
})();
