import { IAction, CLICK_TARGET_BUTTON } from '../action-types';

interface IState {
  points: number | undefined
}

const initialState: IState = {
  points: undefined
};

const targetReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case CLICK_TARGET_BUTTON: {
      const pointsProbabilities = [0.21, 0.19, 0.16, 0.13, 0.10, 0.08, 0.06, 0.04, 0.02, 0.01];
      let probability = Math.random();
      let newPoints = 0;

      do {
        console.log(probability);
        probability -= pointsProbabilities[newPoints++];
      } while (probability > 0);

      return {
        ...state,
        points: newPoints
      };
    }
    default: {
      return state;
    }
  }
};

export default targetReducer;