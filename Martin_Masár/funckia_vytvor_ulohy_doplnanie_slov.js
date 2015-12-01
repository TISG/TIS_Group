
function vytvor_ulohy_doplnanie(slova, pocet, pocetDobrych){
    //parametre su slova z databázy, počet úloh na vytvorenie a počet dobrých slov k 1 zlému
   var ulohy=[];
   if (slova.length<pocetDobrych){
       return null;
   }
   //táto úloha nemá kontrolu počtu slov proti počet úloh
   //nemalo by to moc zmysel..., resp. vypočítať všetky možnosti by trvalo moc dlho
  var vybrane=[];
  var aktualne=[];
  var j=0;
  //vytvor daný počet úloh
  for (var i=0;i<pocet;i++){
    //ako prve najde nevybrané slovo
    while (slova[j].vybrane===true){
        j=(j+1)%pocet;
    }
    //zapise ho do vybranych slov
    vybrane.push(slova[j]);
    var temp=0;
    //vytvorím si zoznam vybraných slov, ktoré použijem
    while(aktualne.length<pocetDobrych){
        temp=Math.floor(Math.random() * this.ulohy.length); 
        if (slova[temp].vybrane===true){
            //kontrola, aby sa slová neopakovali
            if (skontroluj(aktualne, temp)){
                aktualne.push(temp);
                vybrane.push(slova[temp]);
            }
        }
    }
    //vytvorím zo slov novú úlohu
    ulohy.push(uloha(1,i,vybrane,vybrane[0].text));
    //vynuluj vybrane a aktualne
    vybrane=[];
    aktualne=[];
  }
return ulohy;
}


//skotroluj, či je premenná časť v poli
function skontroluj(pole, cast){
   if (jePole(pole)) {
    for (var i=0; i<pole.length; i++){
      if (pole===cast){
      return false;}
    }
   }
   return true;
}

