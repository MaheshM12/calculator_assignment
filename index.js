
let screen=document.getElementById('screen');
let btns=document.querySelectorAll(".bt1") ;
let screenvalue='';
for(itm of btns){
    itm.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
       console.log('btn text '+buttontext);
       if(buttontext =='C'){
        screenvalue='';
       screen.value =screenvalue;

       }
       else if(buttontext =='='){
        screen.value=eval(screenvalue);
       }
       else{
        screenvalue += buttontext;
        screen.value = screenvalue;
       }
    })
}
