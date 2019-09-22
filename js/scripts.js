let buttonX = document.querySelector(".buttonX")
let mainX = document.querySelector(".mainheader__buttonX")
let logo = document.querySelector(".mainheader__logo")


buttonX.addEventListener("click", function () {
    let value = mainX.classList.contains("mainheader__buttonX_show")
    if (value) {
        mainX.classList.remove("mainheader__buttonX_show")
        buttonX.classList.remove("change")
    } else {
        mainX.classList.add("mainheader__buttonX_show")
        buttonX.classList.add("change")
    }

})


logo.animate([{opacity:'0.0'},{opacity:'1.0'}],{duration:3000,fill:'forwards'});
