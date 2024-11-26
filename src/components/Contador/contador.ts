class ContadorComponent extends HTMLElement {
  private countdownValue: number = 3;
  private interval: any;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render(); // Renderizar la estructura inicial
    this.startCountdown(); // Iniciar el contador
  }

  // Función para iniciar el contador y la animación
  startCountdown() {
    this.interval = setInterval(() => {
      this.countdownValue--;
      this.updateCounter(this.countdownValue); // Actualizar el contador
      if (this.countdownValue === 0) {
        clearInterval(this.interval); // Detener el contador
      }
    }, 1000); // Actualizar cada segundo
  }

  // Función para actualizar el contador en el DOM
  updateCounter(countdown: number) {
    const counterElement = this.shadowRoot!.querySelector("#counter")!;
    counterElement.textContent = countdown.toString(); // Actualizar el número
  }

  // Función para renderizar el HTML y CSS del contador
  render() {
    this.shadowRoot!.innerHTML = `
        <style>

          .edp-loader {
	        border: 10px solid darkgray;
	        border-radius: 50%;
	        border-top: 10px solid black;
	        width: 120px;
	        height: 120px;
	        -webkit-animation: spin 2s linear infinite;
	        animation: spin 2s linear infinite;
            }

        @-webkit-keyframes spin {
	    0% { -webkit-transform: rotate(0deg); }
	        100% { -webkit-transform: rotate(360deg); }
        }

        @keyframes spin {
	    0% { transform: rotate(0deg); }
	    100% { transform: rotate(360deg); }
        }

        #counter {
            font-size: 50px;
            position: absolute;
            top: 50%;             /* Centra el número verticalmente */
            left: 50%;            /* Centra el número horizontalmente */
            transform: translate(-50%, -50%); 
            pointer-events: none;
            }

        </style>
        <div class = "container">
        <div class="edp-loader">
        <span id="counter">3</span>
        </div>
        </div>
      `;
  }
}

// Definimos el nuevo elemento del componente
customElements.define("contador-component", ContadorComponent);
