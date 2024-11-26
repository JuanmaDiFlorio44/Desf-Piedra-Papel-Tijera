import { Router } from "./router";
import { HomePage } from "./pages/HomePage";
import { GamePage } from "./pages/GamePage";
import { ResultPage } from "./pages/ResultPage";
import { CountdownPage } from "./pages/countdown";

const router = new Router();

router.addRoute("/", () => {
  HomePage(router);
});

router.addRoute("/game", () => {
  GamePage(router);
});

router.addRoute("/countdown", () => {
  CountdownPage(router);
});

router.addRoute("/result", () => {
  ResultPage(router);
});

router.start();
