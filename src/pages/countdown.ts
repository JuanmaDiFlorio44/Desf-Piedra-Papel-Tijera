import { Router } from "../router";
import state from "../state";
import "../components/Contador/contador"; // Importamos el componente

export const CountdownPage = (router) => {
  const app = document.getElementById("app")!;

  // Inicializa el contenido de la página con el contador
  app.innerHTML = `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        }

    h1 {
        font-family: 'Odibee Sans';
        font-size: 80px;
        color: #009048;
        width: 280px;
    }
    
    </style>

    <div class="container">
    <h1>El ganador es...</h1>
    <contador-component></contador-component> <!-- Inserta el componente -->
    </div>
  `;

  setTimeout(() => {
    router.navigate("/result"); // Navegar a la página de resultados después de 3 segundos
  }, 3000); // Tiempo de 3 segundos para la cuenta atrás
};
