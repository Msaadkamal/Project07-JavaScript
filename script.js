let count=0;
const degit=document.getElementById('degit');
const btns=document.querySelectorAll('.btn');
debugger
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
       let style =  e.currentTarget.classList;
       if (style.contains("decrease")) {
        count--;
       }
       else if(style.contains("increase")){
          count++;       
       }
       else
       count=0;
       degit.textContent=count;

       if (count>0) {
        degit.style.color="green";
        
      }
      if (count<0) {
  
        degit.style.color="red"
      }
      if(count===0){
        degit.style.color ="black"
      }

    })
   

})

