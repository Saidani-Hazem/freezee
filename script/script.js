function verif(){
  Vemail();
  Vnom();
  Vsubject();
  Vshare();
  }


function Vemail(){
  let email = document.getElementById("email").value;
  let gmail = document.getElementById("email");
    if(email.includes("@") && email.includes(".") || email.length > 2){
      console.log("correcte");
    }else{
      gmail.classList.add("erreur");
    }}


    function Vnom(){
      let nom = document.getElementById("name").value;
      let vnom = document.getElementById("name");
    for(let i = 0 ; i < nom.length ; i++){
      if(nom[i] >= "A" || nom[i] <= "z"){
        return true;
      }else{
        vnom.classList.add("erreur");
        return false;
      }}}
    
      function Vsubject(){
        let subject = document.getElementById("subject").value;
        let vsubject = document.getElementById("subject");
      for(let i = 0 ; i < subject.length ; i++){
        if(subject[i] >= "A" || subject[i] <= "z"){
          return true;
        }else{
          vsubject.classList.add("erreur");
          return false;
        }}}
    
    function Vshare(){
      let share = document.getElementById("share").value;
      let vshare = document.getElementById("share");
      if(share.length < 20 || share.length > 120){
        vshare.classList.add("erreur");
        return false;
      }else{
        return true;
      }}