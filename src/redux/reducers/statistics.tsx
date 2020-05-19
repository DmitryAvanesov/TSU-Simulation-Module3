import { IAction, CHANGE_STATISTICS_PROBABILITY, CHANGE_STATISTICS_AMOUNT, CLICK_STATISTICS_BUTTON, CLICK_STATISTICS_DISCRETE_BUTTON, CHANGE_STATISTICS_PARAMETER, CLICK_STATISTICS_INFINITE_BUTTON } from '../action-types';

interface IState {
  numberOfProbabilities: number,
  probabilities: Array<number>,
  amount: number,
  result: Array<number>,
  averageApproximate: number,
  varianceApproximate: number,
  averageError: number,
  varianceError: number,
  chiSquareTableValue: number,
  chiSquare: number,
  numberOfParameters: number,
  parameters: Array<number>
}

const initialState: IState = {
  numberOfProbabilities: 5,
  probabilities: new Array<number>(20, 20, 20, 20, 20),
  amount: 10,
  result: new Array<number>(0, 0, 0, 0, 0),
  averageApproximate: NaN,
  varianceApproximate: NaN,
  averageError: NaN,
  varianceError: NaN,
  chiSquareTableValue: 9.2364,
  chiSquare: NaN,
  numberOfParameters: 2,
  parameters: new Array<number>(0, 1)
};

const statisticsReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case CHANGE_STATISTICS_PROBABILITY: {
      const newProbabilities = [...state.probabilities];
      let newProbability = parseFloat(action.payload.newProbability.toFixed(2));

      if (newProbability < 0) {
        newProbability = 0;
      }
      else if (newProbability > 100) {
        newProbability = 100;
      }

      newProbabilities[action.payload.curIndex] = newProbability;

      return {
        ...state,
        probabilities: newProbabilities
      };
    }
    case CHANGE_STATISTICS_AMOUNT: {
      return {
        ...state,
        amount: action.payload.newAmount
      };
    }
    case CLICK_STATISTICS_BUTTON: {
      const newResult = new Array<number>(0, 0, 0, 0, 0);

      for (let i = 0; i < state.amount; i++) {
        let probability = Math.random() * 100;
        let event = -1;

        do {
          probability -= state.probabilities[++event];
        } while (probability > 0);

        newResult[event]++;
      }

      newResult.forEach((value, index) => {
        newResult[index] = parseFloat((value / state.amount * 100).toFixed(2));
      });

      return {
        ...state,
        result: newResult
      };
    }
    case CLICK_STATISTICS_DISCRETE_BUTTON: {
      const values = new Array<number>(1, 3, 7, 9, 35);
      let averageReal = 0;
      let varianceReal = 0;
      let newAverageApproximate = 0;
      let newVarianceApproximate = 0;

      state.probabilities.map((value, index) => {
        averageReal += value * 0.01 * values[index];
      });

      state.probabilities.map((value, index) => {
        varianceReal += value * 0.01 * values[index] ** 2;
      });

      varianceReal -= averageReal ** 2;

      state.result.map((value, index) => {
        newAverageApproximate += value * 0.01 * values[index];
      });

      state.result.map((value, index) => {
        newVarianceApproximate += value * 0.01 * values[index] ** 2;
      });

      newVarianceApproximate -= newAverageApproximate ** 2;

      const newAverageError = Math.abs(newAverageApproximate - averageReal) / Math.abs(averageReal);
      const newVarianceError = Math.abs(newVarianceApproximate - varianceReal) / Math.abs(varianceReal);

      let newChiSquare = 0;

      state.probabilities.map((value, index) => {
        newChiSquare += (state.result[index] * 0.01 * state.amount) ** 2 / (value * 0.01 * state.amount);
      });

      newChiSquare -= state.amount;

      return {
        ...state,
        averageApproximate: newAverageApproximate,
        varianceApproximate: newVarianceApproximate,
        averageError: newAverageError,
        varianceError: newVarianceError,
        chiSquare: newChiSquare
      };
    }
    case CHANGE_STATISTICS_PARAMETER: {
      const newParameters = [...state.parameters];
      let newParameter = action.payload.newParameter;

      if (newParameter < 0) {
        newParameter = 0;
      }

      newParameters[action.payload.curIndex] = newParameter;

      return {
        ...state,
        parameters: newParameters
      };
    }
    case CLICK_STATISTICS_INFINITE_BUTTON: {
      const newProbabilities = new Array<number>(0, 0, 0, 0, 0);
      let curValue = 0;
      const lambda = 2;

      const factorialize = (value: number): number => {
        if (value == 0)
          return 1;
        else {
          return value * factorialize(value - 1);
        }
      };

      const getPoissonProbability = (value: number) => {
        return lambda ** value * Math.E ** (-lambda) / factorialize(value) * 100;
      };

      for (let i = 0; i < state.numberOfParameters; i++) {
        while (curValue < state.parameters[i]) {
          newProbabilities[i * 2] += getPoissonProbability(curValue++);
        }
  
        newProbabilities[i * 2 + 1] = getPoissonProbability(curValue++);
      }

      newProbabilities[state.numberOfProbabilities - 1] = 100 - newProbabilities.reduce((a, b) => a + b);
      console.log(newProbabilities);

      const newResult = new Array<number>(0, 0, 0, 0, 0);

      for (let i = 0; i < state.amount; i++) {
        const l = Math.exp(-lambda);
        let p = 1;
        let k = -1;

        do {
          k++;
          p *= Math.random();
        } while (p > l);

        if (k < state.parameters[0]) {
          newResult[0]++;
        }
        else if (k == state.parameters[0]) {
          newResult[1]++;
        }
        else if (k < state.parameters[1]) {
          newResult[2]++;
        }
        else if (k == state.parameters[1]) {
          newResult[3]++;
        }
        else {
          newResult[4]++;
        }
      }

      newResult.forEach((value, index) => {
        newResult[index] = parseFloat((value / state.amount * 100).toFixed(2));
      });

      return {
        ...state,
        probabilities: newProbabilities,
        result: newResult
      };
    }
    default: {
      return state;
    }
  }
};

export default statisticsReducer;