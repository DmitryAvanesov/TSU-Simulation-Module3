import { IAction, CLICK_DICE_BUTTON, CLICK_FOOTBALL_BUTTON } from '../action-types';
import imageList from '../../images/dice/index';

interface IState {
  scoreFirst: number,
  scoreSecond: number
}

const initialState: IState = {
  scoreFirst: 0,
  scoreSecond: 0
};

const diceReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case CLICK_FOOTBALL_BUTTON: {
      const randomPoisson = () => {
        const lambda = 1.3;
        const l = Math.exp(-lambda);
        let p = 1;
        let k = 0;
  
        do {
          k++;
          p *= Math.random();
        } while (p > l);
  
        return k - 1;
      };

      return {
        ...state,
        scoreFirst: randomPoisson(),
        scoreSecond: randomPoisson()
      };
    }
    default: {
      return state;
    }
  }
};

export default diceReducer;