let btn = document.getElementById("btn");
    let main = document.getElementsByTagName("main")[0];
    let error = document.getElementsByClassName("error")[0];
    btn.addEventListener("click", () => {
      obtenrNumero()
    })

    function obtenrNumero() {
      let elementoActivo = document.querySelector('input[name="public"]:checked');
      if (elementoActivo) {
        let numeroObtenido = elementoActivo.value;
        resetear(numeroObtenido)
      } else {
        error.style.display = "block"
        setTimeout(() => {
          error.style.display = "none"
        }, 5000);
      }
    }
    function resetear(numeroObtenido) {
      main.textContent = ""
      insertarTexto(numeroObtenido);
    }
    function insertarTexto(numeroObtenido) {
      main.innerHTML = `
      <div class="container">
        <div class="contenedor1">
        <div id="img_enviado">
          <img src="./images/illustration-thank-you.svg">
        </div>
        <div class="mensaje">
          <p>You Selected ${numeroObtenido} out of 5</p>  
        </div>
      </div>
      <div class="contenedor2">
        <h2>
          Thank You!
        </h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!
        </p>
      </div>
      </div>
      `
    }