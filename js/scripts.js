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

window.addEventListener("click", function (event) {
    let value = mainX.classList.contains("mainheader__buttonX_show");
    console.log(buttonX.children[0])
    
    if (mainX != event.target && 
        mainX != event.target.parentNode && 
        event.target != buttonX &&
        event.target != buttonX.children[0] &&
        event.target != buttonX.children[1] &&
        event.target != buttonX.children[2] 
         ) {
        mainX.classList.remove("mainheader__buttonX_show")
        buttonX.classList.remove("change")

    }

})

logo.animate([{ opacity: '0.0' }, { opacity: '1.0' }], { duration: 3000, fill: 'forwards' });
