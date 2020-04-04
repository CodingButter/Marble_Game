import State from "./State";

export default class GameState extends State {
  tick(_dt) {
    console.log("ticking");
  }

  render(_c) {
    console.log("rendering");
  }
}
