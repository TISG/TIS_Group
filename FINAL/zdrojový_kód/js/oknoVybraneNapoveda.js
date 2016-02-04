
var oknoVybraneNapoveda;

(function () {

  oknoVybraneNapoveda = function () {
    RWindow.call (this, 650, 40, 650, 265, 'logo_vybrane_male.png');

    var self = this;

    this.change_cfg ({bgcolor:'rgb(164, 234, 164)', selcolor:'rgb(81, 218, 129)'});
    this.resizeable = true;
    this.dragable = true;
    this.lab.innerHTML = 'Vybrané slová - Nápoveda';
    this.lab.style.textAlign = 'center';
    this.lab.style.marginLeft = '0px';

    //Adrian
    zobrazNapovedu();
    
    function zobrazNapovedu() {
      self.con.innerHTML = '<div id="napoveda"> <p>Cvičenia ti ponúkajú hravú formu učenia sa vybraných slov.<br> \
      <br>&nbsp&nbsp&nbspCvičenie 1 - vyber správne slovo z dvojice ponúknutých slov. \
      <br>&nbsp&nbsp&nbspCvičenie 2 - spomedzi zobrazených slov vyber to, ktoré (nie) je vybrané. \
      <br>&nbsp&nbsp&nbspCvičenie 3 - zahraj sa pexeso, hľadaj dvojice slov.</p>   \
      <p>Pre zoznam vybraných slov stlač na obrázok s písmenami dole a vyber si písmeno.</p></div>'
    }
   
    this.Bclose.style.visibility = 'visible';
    this.Bclose.addEventListener ('mousedown', function (e) {
      self.hide ();
      menu.Add (self.ico);
      e.stopPropagation ();
    });

    this.ico = Asset.image ('obrazky/logo_vybrane_velke_help.png');
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
    oknoVybraneNapoveda.prototype = new Tmp ();
  })();
})();