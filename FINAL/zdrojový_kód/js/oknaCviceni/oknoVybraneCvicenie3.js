

var oknoVybraneCvicenie3;
var vybrane, dlzkaVyb;

(function () {

  oknoVybraneCvicenie3 = function () {
    RWindow.call (this, 240, 40, 145, 420, 'logo_vybrane_male.png');

    var self = this;

    this.change_cfg ({bgcolor:'rgb(164, 234, 164)', selcolor:'rgb(81, 218, 129)'});
    this.resizeable = true;
    this.dragable = true;
    this.lab.innerHTML = 'Cvičenie 3';
    this.lab.style.textAlign = 'center';
    this.lab.style.marginLeft = '0px';
    
    //Adrian, Peter
    self.show();
    
    var vybraneB = '{"slova": [{"slovo": "by"}, {"slovo": "aby"}, {"slovo": "byľ"},' + 
      '{"slovo": "bystrý"},{"slovo": "Bystrica"},{"slovo": "Bytča"},{"slovo": "byť"},' +
      '{"slovo": "nábytok"},{"slovo": "bývať"},{"slovo": "bydlisko"},' +
      '{"slovo": "príbytok"},{"slovo": "dobytok"},{"slovo": "kobyla"},{"slovo": "obyčaj"},' +
      '{"slovo": "býk"},{"slovo": "bylina"},{"slovo": "bydlo"},{"slovo": "dobyt"},' +
      '{"slovo": "odbyt"},{"slovo": "byvol"},{"slovo": "bytost"},{"slovo": "bývalý"},' +
      '{"slovo": "úbytok"},{"slovo": "prebytok"},{"slovo": "zbytočný"}]}';
      
    var vybraneM = '{"slova": [{"slovo": "my"}, {"slovo": "mykať sa"}, {"slovo": "myslieť"},' + 
      '{"slovo": "myšlienka"}, {"slovo": "myseľ"}, {"slovo": "umývať sa"}, {"slovo": "mydlo"},' + 
      '{"slovo": "myš"}, {"slovo": "šmýkať sa"}, {"slovo": "hmyz"}, {"slovo": "žmýkať"},' + 
      '{"slovo": "priemysel"}, {"slovo": "Myjava"}, {"slovo": "mýto"}, {"slovo": "mys"},' + 
      '{"slovo": "zamykať"}, {"slovo": "pomykov"}, {"slovo": "hmýriť sa"}, {"slovo": "šmyk"},' + 
      '{"slovo": "priesmyk"}, {"slovo": "omyl"}, {"slovo": "zmysel"}, {"slovo": "pomyje"}]}';
    
    
    var vybraneP = '{"slova": [{"slovo": "pýcha"},{"slovo": "pýtať sa"},{"slovo": "pýr"},' +
      '{"slovo": "kopyto"},{"slovo": "prepych"},{"slovo": "pysk"},{"slovo": "pykať"},' +
      '{"slovo": "pýšiť sa"},{"slovo": "pytliak"},{"slovo": "dopyt"},{"slovo": "zapýriť sa"},' +
      '{"slovo": "pyré"},{"slovo": "pyžamo"},{"slovo": "pytač"}]}';
    
    
    var vybraneR = '{"slova": [{"slovo": "ryba"}, {"slovo": "rýchly"}, {"slovo": "ryť"},' + 
      '{"slovo": "rýpať"}, {"slovo": "hrýzť"}, {"slovo": "kryť"}, {"slovo": "skryť"},' + 
      '{"slovo": "koryto"}, {"slovo": "korytnačka"}, {"slovo": "strýc"}, {"slovo": "ryčať"},' + 
      '{"slovo": "ryža"}, {"slovo": "bryndza"}, {"slovo": "rys"}, {"slovo": "rysovať"},' + 
      '{"slovo": "Korytnica"}, {"slovo": "rýdzi"}, {"slovo": "rýdzik"}, {"slovo": "brýzgať"},' + 
      '{"slovo": "rytier"}, {"slovo": "trýzniť"}, {"slovo": "rým"}, {"slovo": "ryha"},' + 
      '{"slovo": "kryha"}, {"slovo": "poryv"}, {"slovo": "úryvok"}, {"slovo": "Torysa"},' + 
      '{"slovo": "ryšavý"}, {"slovo": "prýštiť"}, {"slovo": "trysk"}, {"slovo": "kryštál"},' + 
      '{"slovo": "rýľ"}, {"slovo": "rytmus"}]}';
    
    
    var vybraneS = '{"slova": [{"slovo": "syn"}, {"slovo": "syr"}, {"slovo": "sýty"},' + 
      '{"slovo": "sypať"}, {"slovo": "syseľ"}, {"slovo": "syčať"}, {"slovo": "sýkorka"},' + 
      '{"slovo": "sychravý"}, {"slovo": " vysychať"}, {"slovo": "osýpky"},' + 
      '{"slovo": "sypký"}, {"slovo": "sykať"}]}';
    
    
    var vybraneV = '{"slova": [{"slovo": "vysoký"}, {"slovo": "zvyk"}, {"slovo": "vy"},' + 
      '{"slovo": "vykať"}, {"slovo": "výr (sova)"}, {"slovo": "výskať"},' + 
      '{"slovo": "vyť (vlk vyje)"}, {"slovo": "vy (predpona)"}, {"slovo": "vyžla"},' + 
      '{"slovo": "vydra"}, {"slovo": "vyhňa"}, {"slovo": "výsosť"}, {"slovo": "zvyšok"},' + 
      '{"slovo": "výskyt"}, {"slovo": "výživa"}, {"slovo": "výťah"}, {"slovo": "vyučovanie"},' + 
      '{"slovo": "výpočet"}, {"slovo": "výraz"}, {"slovo": "vyrážka"}, {"slovo": "výskum"},' + 
      '{"slovo": "výstava"}]}';
    
    
    var vybraneZ = '{"slova": [{"slovo": "jazyk"}, {"slovo": "nazývať sa"},' + 
      '{"slovo": "ozývať"}, {"slovo": "prezývať"}, {"slovo": "vyzývať"},' + 
      '{"slovo": "pozývať"}, {"slovo": "vzývať"}]}';
    
    cvicenie3();
    
    function cvicenie3() {
        self.con.innerHTML = '<div id = "pexesoButtons"><p><button id="pexeso_b">po B</button></p>  \
  		  <p><button id="pexeso_m">po M</button></p>  \
  		  <p><button id="pexeso_p">po P</button></p>  \
  		  <p><button id="pexeso_r">po R</button></p>  \
  		  <p><button id="pexeso_s">po S</button></p>  \
  		  <p><button id="pexeso_v">po V</button></p>  \
  		  <p><button id="pexeso_z">po Z</button></p></div>'
  		
  		  b = self.con.getElementById("pexeso_b");
  		  b.addEventListener("click", function (e) {
          vytvorUvod();
          vybrane = vybraneB;
          $jq.getScript('js/oknaCviceni/cvicenia/pexeso.js');
        }, false);
        
  		  m = self.con.getElementById("pexeso_m");
  		  m.addEventListener("click", function (e) {
          vytvorUvod();
          vybrane = vybraneM;
          $jq.getScript('js/oknaCviceni/cvicenia/pexeso.js');
        }, false);;
        
  		  p = self.con.getElementById("pexeso_p");
  		  p.addEventListener("click", function (e) {
          vytvorUvod();
          vybrane = vybraneP;
          $jq.getScript('js/oknaCviceni/cvicenia/pexeso.js');
        }, false);
        
  		  r = self.con.getElementById("pexeso_r");
  		  r.addEventListener("click", function (e) {
          vytvorUvod();
          vybrane = vybraneR;
          $jq.getScript('js/oknaCviceni/cvicenia/pexeso.js');
        }, false);
        
  		  s = self.con.getElementById("pexeso_s");
  		  s.addEventListener("click", function (e) {
          vytvorUvod();
          vybrane = vybraneS;
          $jq.getScript('js/oknaCviceni/cvicenia/pexeso.js');
        }, false);
        
  		  v = self.con.getElementById("pexeso_v");
  		  v.addEventListener("click", function (e) {
          vytvorUvod();
          vybrane = vybraneV;
          $jq.getScript('js/oknaCviceni/cvicenia/pexeso.js');
        }, false);
        
  		  z = self.con.getElementById("pexeso_z");
  		  z.addEventListener("click", function (e) {
          vytvorUvod();
          dlzkaVyb = 7;
          vybrane = vybraneZ;
          $jq.getScript('js/oknaCviceni/cvicenia/pexeso.js');
        }, false);
        
        function vytvorUvod() {
          dlzkaVyb = 10;
          self.lab.innerHTML = 'Cvičenie 3 - Pexeso';
          self.change_size(720, 510);
          self.con.innerHTML = '<div id="memory_board"></div> \
          <div id="counter">0</div>\
          <div id="koniec">0</div>'; 
          memory_board = self.con.getElementById("memory_board");
		      counter = self.con.getElementById("counter");
          koniec = self.con.getElementById("koniec");
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
    oknoVybraneCvicenie3.prototype = new Tmp ();
  })();
})();
