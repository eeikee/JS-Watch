function loading(){
    let msg1 = window.document.getElementById("msg1");
    let msg2 = window.document.getElementById("msg2");
    let img = window.document.getElementById("pic");
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
        if(hour>=6 && hour<12){
            msg1.innerHTML= "Bom dia - Good Morning - おはようございます"
            img.src="manha.png";
            document.body.style.background = "#47658b";
        }
        else if(hour>=12 && hour<18){
        msg1.innerHTML= "Boa tarde - Good afternoon - こんにちは"
            if(hour<=16 && min<30){
            img.src="tarde1.png";
            document.body.style.background = "#48658d";
          }
         else{
            img.src="tarde2.png";
            document.body.style.background = "#c68567";
         }  
     }
        else{
            if(hour>=18 && hour<22){ 
                msg1.innerHTML= "Boa noite - Good evening - こんばんは"       
                img.src="noite.png";
                document.body.style.background = "#413324";
            }
            else{
                msg1.innerHTML= "Boa noite - Good night - こんばんは"
                img.src="madrugada.png";
                document.body.style.background = "#252726";
                }
        }
    if(hour<10){
        hour="0"+hour;
    }
    if(min<10){
        min="0"+min;
    }
    msg2.innerHTML += `accessed time: ${hour}:${min}`;
   
}
