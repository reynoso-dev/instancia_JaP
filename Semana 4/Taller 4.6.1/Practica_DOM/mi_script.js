document.addEventListener('DOMContentLoaded', function () {
  const linker = document.links;
  const finalParagraph = document.getElementById('info'); 

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :

    let link = document.getElementsByTagName('a');
    let linkCount = link.length;
    let name = document.createElement('p');
    name.textContent = "El número de enlaces en la página es de " + linkCount + ".";
    finalParagraph.appendChild(name);

    // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :

    let links = document.getElementsByTagName('a');
    let linkCounter = links.length;
    if (linkCounter >= 2) {
    let penultimateLink = links[linkCounter - 2].href;
    let name2 = document.createElement('p');
     name2.textContent = "El penúltimo enlace de la página es " + penultimateLink + ".";
     finalParagraph.appendChild(name2);
    }

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :

    let test = "http://prueba/";
    let controller = Array.from(linker).filter(link => link.href=== test); 
    let name3 = document.createElement('p');
    name3.textContent = "El número de enlaces que apuntan a http://prueba/ es de: " + controller.length;
    finalParagraph.appendChild(name3);



    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :
    
    let paragraphs = document.getElementsByTagName('p');
    let thirdParagraphLinks = paragraphs[2].getElementsByTagName('a');
    let linkEnumerate = thirdParagraphLinks.length;
    let name4 = document.createElement('p');
    name4.textContent = "El número de enlaces del tercer párrafo es de " + linkEnumerate + ".";
    finalParagraph.appendChild(name4);


});