export class Comenzar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Obtener el valor del atributo "label" o usar "Comenzar" como valor predeterminado
    const buttonLabel = this.getAttribute("label") || "Comenzar";

    // Usar el valor de buttonLabel dentro del HTML del componente
    this.shadowRoot!.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        .button-container{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        button{
          background-color: #006CFC;
          width: 350px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px;
          font-family: 'Odibee Sans';
          font-weight: 400;
          font-size: 45px;
          border: 10px solid #001997;
          border-radius: 10px;
        }
      </style>
      <div class="button-container">
        <button>${buttonLabel}</button>
      </div>
    `;
  }
}

customElements.define("comenzar-component", Comenzar);
