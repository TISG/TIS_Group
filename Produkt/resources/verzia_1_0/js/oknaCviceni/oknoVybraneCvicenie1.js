
var oknoVybraneCvicenie1;

(function () {

  oknoVybraneCvicenie1 = function () {
    RWindow.call (this, 210, 40, 450, 510, 'logo_vybrane_male.png');

    var self = this;

    this.change_cfg ({bgcolor:'rgb(164, 234, 164)', selcolor:'rgb(81, 218, 129)'});
    this.resizeable = true;
    this.dragable = true;
    this.lab.innerHTML = 'Vybrané slová - Cvičenie 1';
    this.lab.style.textAlign = 'center';
    this.lab.style.marginLeft = '0px';
    
    //Adrian, Peter
    self.show();
    cvicenie1();
    
    function cvicenie1() {
      self.con.innerHTML = '<div id="container">  \
      <p>Z dvojice vyber slovo, ktoré je podľa teba správne.</p>    \
      <div id="content">        \
        <img src="" id="otazka" height="200" width="250">    \
        <div id="moznosti"></div>    \
          <p><button id="submit"></button></p>   \
          <p id="skore"></p>  \
        </div>    \
      </div>  '
      
      content = self.con.getElementById("content");
      otazkaContainer = self.con.getElementById("otazka");
      moznostiContainer = self.con.getElementById("moznosti");
      skoreContainer = self.con.getElementById("skore");
      submitBtn = self.con.getElementById("submit");
      
      $jq.getScript('js/oknaCviceni/cvicenia/cvicenie1.js');
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
    oknoVybraneCvicenie1.prototype = new Tmp ();
  })();
})();
