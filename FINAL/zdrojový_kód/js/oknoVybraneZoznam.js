
var oknoVybraneZoznam;

(function () {

  oknoVybraneZoznam = function () {
    RWindow.call (this, 650, 310, 475, 180, 'logo_vybrane_male.png');

    var self = this;

    this.change_cfg ({bgcolor:'rgb(164, 234, 164)', selcolor:'rgb(81, 218, 129)'});
    this.resizeable = true;
    this.dragable = true;
    this.lab.innerHTML = 'Zoznam vybraných slov';
    this.lab.style.textAlign = 'center';
    this.lab.style.marginLeft = '0px';

    //Adrian
    var zoznamPoB = '<div id = "zoznam"<p>by, aby, byľ, bystrý, Bystrica, Bytča, ' + 
        'byť (existovať), nábytok, bývať, byt, bydlisko, príbytok, dobytok, ' + 
        'kobyla, obyčaj, býk, bylina, bydlo (bývanie), dobyť (zmocniť sa), odbyt, ' + 
        'byvol, bytosť, bývalý, úbytok, prebytok, zbytočný</p></div>';
        
    var zoznamPoM = '<div id="zoznam"><p>my, mykať sa, mýliť sa, myslieť, myšlienka, ' +  
        'myseľ, umývať sa, mydlo, myš, šmýkať sa, hmyz, žmýkať, priemysel, Myjava, ' +   
        'mýto, mys, zamykať, pomykov, hmýriť sa, šmyk, priesmyk, omyl, zmysel, pomyje</p></div>'
    
    var zoznamPoP = '<div id="zoznam"><p>pýcha, pýtať sa, pýr, kopyto, prepych, ' + 
        'pysk (papuľa), pykať, pýšiť sa, pytliak, dopyt, zapýriť sa, pyré, pyžamo, pytač</p></div>'
    
    var zoznamPoR = '<div id="zoznam"><p>ryba, rýchly, ryť, rýpať, hrýzť, kryť, ' + 
        'skryť, koryto, korytnačka, strýc, ryčať, ryža, bryndza, rys, rysovať, ' + 
        'Korytnica, rýdzi, rýdzik, brýzgať, rytier, trýzniť, rým, ryha, kryha, ' + 
        'poryv, úryvok, Torysa, ryšavý, prýštiť, trysk, kryštál, rýľ, rytmus</p></div>'
        
    var zoznamPoS = '<div id="zoznam"><p>syn, syr, sýty, sypať, syseľ, syčať, ' + 
        'sýkorka, sychravý, vysychať, osýpky, sypký, sykať</p></div>'
        
    var zoznamPoV = '<div id="zoznam"><p>vysoký, zvyk, vy, vykať, výr (sova), ' +
        'výskať, vyť (vlk vyje), vy (predpona), vyžla, vydra, vyhňa, výsosť, zvyšok, ' + 
        'výskyt, výživa, výťah, vyučovanie, výpočet, výraz, vyrážka, výskum, výstava</p></div>'
    
    var zoznamPoZ = '<div id="zoznam"><p>jazyk, nazývať sa, ozývať, prezývať, ' + 
        'vyzývať, pozývať, vzývať</p></div>'
    
    var zoznamPoL = '<div id="zoznam"><p>Výnimky po L: lyko, lysý, lýtko, lyžica, ' + 
        'mlyn, plyn, plytký, slýchať, lyže, pomaly, plyš, blýskať sa, vzlykať, ' + 
        'lýra, lyrika, lýceum, oplývať, plynúť, splývať, zlyhať</p></div>'  
    
    zobrazVybraneSlova();

    function zobrazVybraneSlova() {
    
      zobrazButtons();
    
      function zobrazButtons() {
        self.con.innerHTML = '<div id = "zoznamButtons">     \
        <p><button id="poB">po B</button> <button id="poM">po M</button> <button id="poP">po P</button>  \
        <button id="poR">po R</button> <button id="poS">po S</button> <button id="poV">po V</button>  \
        <button id="poZ">po Z</button> <button id="poL">po L</button> '
  
        vybraneSlovaPoB = self.con.getElementById("poB");
        vybraneSlovaPoB.addEventListener("click", function (e) {
          zobrazButtons();
          self.change_size(475, 315);
          $jq("#zoznamButtons").append(zoznamPoB);
        }, false);
        
        vybraneSlovaPoM = self.con.getElementById("poM");
        vybraneSlovaPoM.addEventListener("click", function (e) {
          zobrazButtons();
          self.change_size(475, 295);
          $jq("#zoznamButtons").append(zoznamPoM);
        }, false);
        
        
        vybraneSlovaPoP = self.con.getElementById("poP");
        vybraneSlovaPoP.addEventListener("click", function (e) {
          zobrazButtons();
          self.change_size(475, 270);
          $jq("#zoznamButtons").append(zoznamPoP);
        }, false);
        
        vybraneSlovaPoR = self.con.getElementById("poR");
        vybraneSlovaPoR.addEventListener("click", function (e) {
          zobrazButtons();
          self.change_size(475, 320);
          $jq("#zoznamButtons").append(zoznamPoR);
        }, false);
        
        vybraneSlovaPoS = self.con.getElementById("poS");
        vybraneSlovaPoS.addEventListener("click", function (e) {
          zobrazButtons();
          self.change_size(475, 245);
          $jq("#zoznamButtons").append(zoznamPoS);
        }, false);
        
        vybraneSlovaPoV = self.con.getElementById("poV");
        vybraneSlovaPoV.addEventListener("click", function (e) {
          zobrazButtons();
          self.change_size(475, 295);
          $jq("#zoznamButtons").append(zoznamPoV);
        }, false);
        
        vybraneSlovaPoZ = self.con.getElementById("poZ");
        vybraneSlovaPoZ.addEventListener("click", function (e) {
          zobrazButtons();
          self.change_size(475, 245);
          $jq("#zoznamButtons").append(zoznamPoZ);
        }, false);
          
        vybraneSlovaPoL = self.con.getElementById("poL");
        vybraneSlovaPoL.addEventListener("click", function (e) {
          zobrazButtons();
          self.change_size(475, 270);
          $jq("#zoznamButtons").append(zoznamPoL);
        }, false);
      }   
    }
    
    this.Bclose.style.visibility = 'visible';
    this.Bclose.addEventListener ('mousedown', function (e) {
      self.hide ();
      menu.Add (self.ico);
      e.stopPropagation ();
    });

    this.ico = Asset.image ('obrazky/logo_vybrane_velke_zoznam.png');
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
    oknoVybraneZoznam.prototype = new Tmp ();
  })();
})();