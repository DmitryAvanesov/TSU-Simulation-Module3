import { IAction, CLICK_DICE_BUTTON } from '../action-types';
import imageList from '../../resources/dice/index';

interface IState {
  resultImage: string,
  flipped: boolean
}

const initialState: IState = {
  resultImage: imageList[0],
  flipped: false
};

const diceReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case CLICK_DICE_BUTTON: {
      const resultProbabilities = [0.05, 0.1, 0.15, 0.2, 0.25, 0.25];
      let probability = Math.random();
      let event = -1;

      do {
        probability -= resultProbabilities[++event];
      } while (probability > 0);

      return {
        ...state,
        resultImage: imageList[event],
        flipped: !state.flipped
      };
    }
    default: {
      return state;
    }
  }
};

export default diceReducer;