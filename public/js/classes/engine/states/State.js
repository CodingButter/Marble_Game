let currentState = null;
export default class State {
  static getCurrentState() {
    return currentState;
  }

  static setState(state) {
    currentState = state;
  }

  /**
   * @override
   */
  tick(dt) {
    console.log("you need a tick");
  }

  /**
   * @override
   */
  render(c) {
    console.log("you need a render");
  }
}
