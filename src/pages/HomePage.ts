// src/pages/HomePage.ts
import papelImg from "../assets/Papel.png";
import piedraImg from "../assets/Piedra.png";
import tijeraImg from "../assets/Tijera.png";
import "../components/Botones/Boton";

export const HomePage = (router) => {
  // Ahora aceptamos el router como argumento
  const app = document.getElementById("app")!;
  app.innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        h1 {
          font-family: 'Odibee Sans';
          font-size: 80px;
            color: #009048;
            widht: 280px;
        }
  
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .img-container{
          display: flex;
          flex-direction: row;
          margin: 50px;
        }

  
        img {
          width: 150px;
          height: 150px;
          margin: 10px;
        }
  
      </style>
      <div class="container">
        <h1>
         Piedra<br>
         Papel ó<br>
         Tijera
        </h1>
        <comenzar-component label="Comenzar"></comenzar-component>
        <div class = "img-container">
        <img src="${papelImg}" alt="Papel" />
        <img src="${piedraImg}" alt="Piedra" />
        <img src="${tijeraImg}" alt="Tijera" />
        </div>
      </div>
    `;

  const startButton = document.querySelector("comenzar-component")!;
  startButton.addEventListener("click", () => {
    router.navigate("/game"); // Ahora usamos el router pasado como argumento
  });
};
