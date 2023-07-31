document.addEventListener("DOMContentLoaded", function () {
  // Escribe el código necesario aquí
    const highLight = document.getElementById("highlightBtn");
    
    highLight.addEventListener("click", function (){
      const text = document.getElementById("lorem");
      text.classList.add("highlightBtn");
    })
  //
});
