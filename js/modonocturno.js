function elegirmodo() {
    let modo = document.getElementById("modo");
    
    if (modo.getAttribute("href") == "estilos/estilos.css") {
      modo.href = "estilos/estilosnight.css";
    } else {
      modo.href = "estilos/estilos.css";
    }
  }