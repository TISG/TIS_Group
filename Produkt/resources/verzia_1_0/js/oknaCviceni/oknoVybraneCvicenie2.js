
var oknoVybraneCvicenie2;
var vybraneBool;

(function () {

  oknoVybraneCvicenie2 = function () {
    RWindow.call (this, 210, 40, 330, 170, 'logo_vybrane_male.png');

    var self = this;

    this.change_cfg ({bgcolor:'rgb(164, 234, 164)', selcolor:'rgb(81, 218, 129)'});
    this.resizeable = true;
    this.dragable = true;
    this.lab.innerHTML = 'Vybrané slová - Cvičenie 2';
    this.lab.style.textAlign = 'center';
    this.lab.style.marginLeft = '0px';
    
    //Martin, Michal, Adrian
    self.show();
    cvicenie2();
    
    function cvicenie2() {
        self.con.innerHTML = '<div id = "vybraneButtons"><h3>Aké slová chceš vyberať?</h3> \
  		  <p><button id="nevybr">nevybrané</button><button id="vybr">vybrané</button></p></div>'
  
  		  nevyb = self.con.getElementById("nevybr");
  		  nevyb.addEventListener("click", function (e) {
          vytvorUvod();
          vybraneBool = true;
          $jq.getScript('js/oknaCviceni/cvicenia/cvicenie2.js');
        }, false);
        
  		  vyb = self.con.getElementById("vybr");
  		  vyb.addEventListener("click", function (e) {
          vytvorUvod();
          $jq("#jeVybrane").html("Vyber slovo, ktoré je podľa teba vybrané.");
          vybraneBool = false;
          $jq.getScript('js/oknaCviceni/cvicenia/cvicenie2.js');
        }, false);
    }
    function vytvorUvod() {
      self.change_size(690, 480);
      self.con.innerHTML = '<div id="container">  \
      <p id = "jeVybrane">Vyber slovo, ktoré nie je podľa teba vybrané.</p>    \
      <div id="content">        \
        <table id="zobrazeneMoznosti"></table>    \
        <p id="submit2row"><button id="submit"></button></p>   \
        <p id="skore2"></p>  \
        </div>    \
      </div>  '
                  
      content = self.con.getElementById("content");
      moznostiContainer = self.con.getElementById("zobrazeneMoznosti");
      skoreContainer = self.con.getElementById("skore2");
      submitBtn = self.con.getElementById("submit");
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
    oknoVybraneCvicenie2.prototype = new Tmp ();
  })();
})();
