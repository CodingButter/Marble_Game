import GameLoop from "./engine/GameLoop";
import State from "./engine/states/State";
import GameState from "./engine/states/GameState";
import Handler from "./Handler";

export default class Game {
  constructor() {
    this.handler = new Handler(this);
    const gameloop = new GameLoop(new State());
    this.gameloop.state.setState(new GameState());
    gameloop.run();
  }

  getHandler() {
    return this.handler;
  }
}
