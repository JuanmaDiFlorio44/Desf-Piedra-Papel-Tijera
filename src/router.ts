// src/router.ts
import { HomePage } from "./pages/HomePage";
import { GamePage } from "./pages/GamePage";
import { ResultPage } from "./pages/ResultPage";
import { CountdownPage } from "./pages/countdown";

export class Router {
  routes: { [key: string]: Function } = {};

  addRoute(path: string, page: Function) {
    this.routes[path] = page;
  }

  navigate(path: string) {
    window.history.pushState({}, "", path);
    this.render(path);
  }

  render(path: string) {
    const page = this.routes[path];
    if (page) {
      page();
    } else {
      console.error("Página no encontrada");
    }
  }

  start() {
    window.addEventListener("popstate", () => {
      this.render(window.location.pathname);
    });
    this.render(window.location.pathname);
  }
}
