import state from "../state"; // Importamos el estado global
// src/pages/ResultPage.ts
import "../components/Botones/Boton";
import tijera from "../assets/Tijera-objeto.png";
import papel from "../assets/Papel-objeto.png";
import piedra from "../assets/Piedra-objeto.png";

export const ResultPage = (router) => {
  const app = document.getElementById("app")!;

  if (state.gameHistory.length === 0) {
    app.innerHTML = `
      <h1>No hay resultados aún. ¡Juega una partida!</h1>
    `;
    window.location.reload();
  } else {
    const lastGame = state.gameHistory[state.gameHistory.length - 1];

    // Definir el fondo según el resultado
    let backgroundColor = "";
    if (lastGame.result === "Ganaste") {
      backgroundColor = "green"; // Si ganaste, el fondo será verde
    } else if (lastGame.result === "Perdiste") {
      backgroundColor = "red"; // Si perdiste, el fondo será rojo
    } else {
      backgroundColor = "gray"; // Si hay empate, el fondo será gris (opcional)
    }

    if (lastGame.userChoice === "piedra") {
      lastGame.userChoice = `<img src="${piedra}" alt="piedra" class="image-choice"/>`;
    } else if (lastGame.userChoice === "papel") {
      lastGame.userChoice = `<img src="${papel}" alt="papel" class="image-choice"/>`;
    } else if (lastGame.userChoice === "tijera") {
      lastGame.userChoice = `<img src="${tijera}" alt="tijera" width="100" height="100"/>`;
    }

    if (lastGame.computerChoice === "piedra") {
      lastGame.computerChoice = `<img src="${piedra}" alt="piedra" class="image-choice"/>`;
    } else if (lastGame.computerChoice === "papel") {
      lastGame.computerChoice = `<img src="${papel}" alt="papel" width="100" height="100"/>`;
    } else if (lastGame.computerChoice === "tijera") {
      lastGame.computerChoice = `<img src="${tijera}" alt="tijera" width="100" height="100"/>`;
    }

    // Recorremos el historial de partidas para mostrarlo
    state.gameHistory.forEach((game) => {
      const historyContent = `
      <style>
       @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      * {
        font-family: 'Odibee Sans';
      }

      body {
        margin: 0px;
      }

      .image-choice{
      width: 100px;
      height: 100px;
      background-color: transparent;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: ${backgroundColor}; /* Fondo dinámico */
      }

      button:hover {
        background-color: #005bb5;
      }


      .history-container{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin: 20px;
      }

      .history-list{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      }

      .VS{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin: 20px;
      }


      </style>
      <div class="container">
      <h1>Última partida</h1>
      <div class="history-container">
      <div class="history-list">
      Usuario: ${lastGame.userChoice}
      </div>
      <div class="history-list"> 
         Maquina: ${lastGame.computerChoice}
      </div>
         </div>
         <div class="history-list">
         Resultado: ${lastGame.result}
      </div>
      <div class = "VS"
      <p>Usuario: ${state.userWins}</p>
      <p>Máquina: ${state.computerWins}</p>
      </div>
      <comenzar-component label="Volver al Inicio"></comenzar-component>
      </div>
    `;

      app.innerHTML = historyContent;
    });
  }

  const Button = document.querySelector("comenzar-component")!;
  Button.addEventListener("click", () => {
    router.navigate("/"); // Regresar a la página de inicio
  });
};
