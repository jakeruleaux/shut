export default (state = [], action) => {
  switch (action.type) {

    case 'ROLL_DICE':
      const { die1, die2 } = action;
      console.log(rollDice);
      return rollDice;
      default:
      return state;
  }
}
