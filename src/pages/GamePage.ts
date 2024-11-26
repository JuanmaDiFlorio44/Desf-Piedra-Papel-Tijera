import state from "../state"; // Asegúrate de importar el estado global
import papelImg from "../assets/Papel.png";
import piedraImg from "../assets/Piedra.png";
import tijeraImg from "../assets/Tijera.png";

export const GamePage = (router: any) => {
  const app = document.getElementById("app")!;
  app.innerHTML = `
    <style>

    @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    *{
    font-family: 'Odibee Sans';
    }

    body{
    margin: 0px;
    }
    
    .title-container{
    font-size: 30px;
    width: 500px;
    }


    .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    }


    .img-container{
    display: flex;
    flex-direction: row;
    margin: 50px;
    }


    .opcion-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    }


    img{
      width: 100px;
      height: 100px;
      margin: 10px;
      cursor: pointer;
    }
    
    </style>
    <div class = "container">
    <div class = "title-container">
    <h1>Para jugar elige una opcion entre piedra, papel o tijera</h1>
    </div>
    <div class="img-container">
    <div class="opcion-container" ><img id="piedra" src="${piedraImg}" alt="Piedra" /> Piedra </div>  
     <div class="opcion-container"> <img id="papel" src="${papelImg}" alt="Papel" /> Papel </div>
      <div class ="opcion-container"><img id="tijera" src="${tijeraImg}" alt="Tijera" /> Tijera </div>
    </div>
    <comenzar-component label="Volver"></comenzar-component>
    </div>
    <p id="resultado"></p>
  `;

  let userChoice: string | null = null;
  let computerChoice: string | null = null;
  let result: string | null = null;

  // Agregar evento de clic a las imágenes para que actúen como botones
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.addEventListener("click", () => {
      userChoice = image.id; // El id de la imagen es el que corresponde a la elección (piedra, papel, tijera)
      computerChoice = getComputerChoice();
      result = determineWinner(userChoice, computerChoice);

      // Mostrar el resultado en la página
      const resultado = document.getElementById("resultado")!;
      resultado.textContent = `Tu elección: ${userChoice}, Elección de la computadora: ${computerChoice}. Resultado: ${result}`;

      // Guardar la partida en el historial y actualizar las victorias
      state.addGameToHistory(userChoice, computerChoice, result);

      // Navegar a la página de resultados
      router.navigate("/countdown");
    });
  });

  // Agregar evento al botón "Volver"
  const volverButton = document.querySelector("comenzar-component")!;
  volverButton.addEventListener("click", () => {
    router.navigate("/"); // Regresar a la página de inicio
  });

  function getComputerChoice() {
    const choices = ["piedra", "papel", "tijera"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(user: string, computer: string): string {
    const rules = {
      piedra: { piedra: "Empataste", papel: "Perdiste", tijera: "Ganaste" },
      papel: { piedra: "Ganaste", papel: "Empataste", tijera: "Perdiste" },
      tijera: { piedra: "Perdiste", papel: "Ganaste", tijera: "Empataste" },
    };
    return rules[user][computer];
  }
};
