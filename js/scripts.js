let buttonX = document.querySelector(".buttonX")
let mainX = document.querySelector(".mainheader__buttonX")
  

buttonX.addEventListener("click", function(){
     let value = mainX.classList.contains("mainheader__buttonX_show")
     if(value){
        mainX.classList.remove("mainheader__buttonX_show")
        buttonX.classList.remove("change")
    }else{
        mainX.classList.add("mainheader__buttonX_show")
        buttonX.classList.add("change")
    }
    
})