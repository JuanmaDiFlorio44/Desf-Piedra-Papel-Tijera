// src/state.ts
let gameHistory: {
  userChoice: string;
  computerChoice: string;
  result: string;
}[] = []; // Este es el historial de partidas

let userWins = 0; // Guardamos las victorias del jugador
let computerWins = 0; // Guardamos las victorias de la máquina

// Recuperamos el estado de localStorage, si existe
const loadState = () => {
  const storedState = localStorage.getItem("gameState");
  if (storedState) {
    const {
      gameHistory: storedHistory,
      userWins: storedUserWins,
      computerWins: storedComputerWins,
    } = JSON.parse(storedState);
    gameHistory = storedHistory || [];
    userWins = storedUserWins || 0;
    computerWins = storedComputerWins || 0;
  }
};

loadState(); // Cargamos el estado desde el localStorage cuando se inicia la app

// Guardamos el estado en localStorage
const saveState = () => {
  const state = {
    gameHistory,
    userWins,
    computerWins,
  };
  localStorage.setItem("gameState", JSON.stringify(state));
};

// Función para añadir una partida al historial y actualizar victorias
export const addGameToHistory = (
  userChoice: string,
  computerChoice: string,
  result: string
) => {
  // Añadimos la nueva partida al historial
  gameHistory.push({ userChoice, computerChoice, result });

  // Actualizamos las victorias según el resultado
  if (result === "Ganaste") {
    userWins += 1;
  } else if (result === "Perdiste") {
    computerWins += 1;
  }

  saveState(); // Guardamos el estado actualizado
};

// Exportamos el estado global para que se pueda usar en otras partes de la aplicación
const state = {
  gameHistory,
  userWins,
  computerWins,
  addGameToHistory,
  saveState,
};

export default state;
