import { IAction, CHANGE_STATISTICS_PROBABILITY, CHANGE_STATISTICS_AMOUNT, CLICK_STATISTICS_BUTTON, CLICK_STATISTICS_DISCRETE_BUTTON, CHANGE_STATISTICS_INFINITE_PARAMETER, CLICK_STATISTICS_INFINITE_BUTTON, CHANGE_STATISTICS_NORMAL_AVERAGE, CHANGE_STATISTICS_NORMAL_VARIANCE, CLICK_STATISTICS_NORMAL_BUTTON } from '../action-types';

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
  parameters: Array<number>,
  average: number,
  variance: number,
  numberOfNormalCharts: number,
  pointsNormal: Array<number>,
  resultNormalReal: Array<number>,
  resultNormalApproximate: Array<Array<number>>,
  averageNormalApproximate: Array<number>,
  varianceNormalApproximate: Array<number>,
  averageNormalError: Array<number>,
  varianceNormalError: Array<number>,
  chiSquareNormal: Array<number>,
  duration: Array<number>
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
  parameters: new Array<number>(0, 1),
  average: 0,
  variance: 1,
  numberOfNormalCharts: 3,
  pointsNormal: new Array<number>(),
  resultNormalReal: new Array<number>(),
  resultNormalApproximate: new Array<Array<number>>([], [], []),
  averageNormalApproximate: new Array<number>(0, 0, 0),
  varianceNormalApproximate: new Array<number>(0, 0, 0),
  averageNormalError: new Array<number>(NaN, NaN, NaN),
  varianceNormalError: new Array<number>(NaN, NaN, NaN),
  chiSquareNormal: new Array<number>(NaN, NaN, NaN),
  duration: new Array<number>(NaN, NaN, NaN)
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
      const newChiSquareTableValue = 9.24;

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
        chiSquare: newChiSquare,
        chiSquareTableValue: newChiSquareTableValue
      };
    }
    case CHANGE_STATISTICS_INFINITE_PARAMETER: {
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
      const lambda = 2.6;
      const newChiSquareTableValue = 7.78;

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

      const newResult = new Array<number>(0, 0, 0, 0, 0);
      const values = new Array<number>(0, 0, 0, 0, 0);
      let newAverageApproximate = 0;
      let newVarianceApproximate = 0;

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
          values[0] += k;
        }
        else if (k == state.parameters[0]) {
          newResult[1]++;
          values[1] += k;
        }
        else if (k < state.parameters[1]) {
          newResult[2]++;
          values[2] += k;
        }
        else if (k == state.parameters[1]) {
          newResult[3]++;
          values[3] += k;
        }
        else {
          newResult[4]++;
          values[4] += k;
        }
      }

      values.forEach((value, index) => {
        values[index] = value / newResult[index];
      });

      newResult.forEach((value, index) => {
        newResult[index] = parseFloat((value / state.amount * 100).toFixed(2));
      });

      values.forEach((value, index) => {
        if (!Number.isNaN(value)) {
          newAverageApproximate += newResult[index] * 0.01 * value;
          newVarianceApproximate += newResult[index] * 0.01 * value ** 2;
        }
      });

      newVarianceApproximate -= newAverageApproximate ** 2;

      const averageReal = lambda;
      const varianceReal = lambda;
      const newAverageError = Math.abs(newAverageApproximate - averageReal) / Math.abs(averageReal);
      const newVarianceError = Math.abs(newVarianceApproximate - varianceReal) / Math.abs(varianceReal);

      let newChiSquare = 0;

      newProbabilities.map((value, index) => {
        if (value != 0) {
          newChiSquare += (newResult[index] * 0.01 * state.amount) ** 2 / (value * 0.01 * state.amount);
        }
      });

      newChiSquare -= state.amount;

      return {
        ...state,
        probabilities: newProbabilities,
        result: newResult,
        averageApproximate: newAverageApproximate,
        varianceApproximate: newVarianceApproximate,
        averageError: newAverageError,
        varianceError: newVarianceError,
        chiSquare: newChiSquare,
        chiSquareTableValue: newChiSquareTableValue
      };
    }
    case CHANGE_STATISTICS_NORMAL_AVERAGE: {
      return {
        ...state,
        average: action.payload.newAverage
      };
    }
    case CHANGE_STATISTICS_NORMAL_VARIANCE: {
      let newVariance = action.payload.newVariance;

      if (newVariance < 0) {
        newVariance = 0;
      }

      return {
        ...state,
        variance: newVariance
      };
    }
    case CLICK_STATISTICS_NORMAL_BUTTON: {
      const range = 6;
      const numberOfIntervals = Math.ceil(Math.sqrt(state.amount)) + 1;
      const newChiSquareTableValue = numberOfIntervals == 5 ? 9.24 : numberOfIntervals == 11 ? 17.28 : numberOfIntervals == 33 ? 54.78 : numberOfIntervals == 101 ? 118.5 : NaN;
      const newPointsNormal = new Array<number>();
      const newResultNormalReal = new Array<number>();
      const newAverageNormalApproximate = new Array<number>(0, 0, 0);
      const newVarianceNormalApproximate = new Array<number>(0, 0, 0);
      const newAverageNormalError = new Array<number>(state.numberOfNormalCharts);
      const newVarianceNormalError = new Array<number>(state.numberOfNormalCharts);
      let newChiSquareNormal = new Array<number>(0, 0, 0);
      const newDuration = new Array<number>(state.numberOfNormalCharts);

      for (let i = state.average - range; i <= state.average + range; i += 2 * range / numberOfIntervals) {
        newPointsNormal.push(i);
        newResultNormalReal.push(Math.E ** (-((i - state.average) ** 2 / (2 * state.variance))) / Math.sqrt(state.variance * 2 * Math.PI));
      }

      const newResultNormalApproximate = new Array<Array<number>>();

      for (let i = 0; i < state.numberOfNormalCharts; i++) {
        newResultNormalApproximate.push((new Array<number>(newPointsNormal.length)).fill(0));
      }

      let timeStart = Date.now();

      for (let i = 0; i < state.amount; i++) {
        let curValue = 0;

        for (let j = 0; j < 2 * range; j++) {
          curValue += Math.random();
        }

        curValue = (curValue - range) * Math.sqrt(state.variance) + state.average;

        newPointsNormal.forEach((value, index) => {
          if (curValue > value - range / numberOfIntervals && curValue < value + range / numberOfIntervals) {
            newResultNormalApproximate[0][index]++;
          }
        });

        newAverageNormalApproximate[0] += curValue;
        newVarianceNormalApproximate[0] += curValue ** 2;
      }

      newDuration[0] = Date.now() - timeStart;
      timeStart = Date.now();

      for (let i = 0; i < state.amount; i++) {
        let curValue = 0;

        for (let j = 0; j < 2 * range; j++) {
          curValue += Math.random();
        }

        curValue -= range;
        curValue += (curValue ** 3 - curValue * 3) / (range * 40);
        curValue = curValue * Math.sqrt(state.variance) + state.average;

        newPointsNormal.forEach((value, index) => {
          if (curValue > value - range / numberOfIntervals && curValue < value + range / numberOfIntervals) {
            newResultNormalApproximate[1][index]++;
          }
        });

        newAverageNormalApproximate[1] += curValue;
        newVarianceNormalApproximate[1] += curValue ** 2;
      }

      newDuration[1] = Date.now() - timeStart;
      timeStart = Date.now();

      for (let i = 0; i < state.amount; i++) {
        let curValue = Math.sqrt(-2 * Math.log(Math.random())) * Math.sin(2 * Math.PI * Math.random());
        curValue = curValue * Math.sqrt(state.variance) + state.average;

        newPointsNormal.forEach((value, index) => {
          if (curValue > value - range / numberOfIntervals && curValue < value + range / numberOfIntervals) {
            newResultNormalApproximate[2][index]++;
          }
        });

        newAverageNormalApproximate[2] += curValue;
        newVarianceNormalApproximate[2] += curValue ** 2;
      }

      newDuration[2] = Date.now() - timeStart;

      for (let i = 0; i < state.numberOfNormalCharts; i++) {
        newAverageNormalApproximate[i] /= state.amount;
        newVarianceNormalApproximate[i] = newVarianceNormalApproximate[i] / state.amount - newAverageNormalApproximate[i] ** 2;

        newAverageNormalError[i] = Math.abs(newAverageNormalApproximate[i] - state.average);
        newVarianceNormalError[i] = Math.abs(newVarianceNormalApproximate[i] - state.variance);

        newResultNormalApproximate[i].forEach((value, index) => {
          newChiSquareNormal[i] += value ** 2 / (state.amount * newResultNormalReal[index] * 2 * range / numberOfIntervals);
        });

        newChiSquareNormal[i] -= state.amount;

        newResultNormalApproximate[i].forEach((value, index) => {
          newResultNormalApproximate[i][index] /= state.amount * (2 * range / numberOfIntervals);
        });
      }

      return {
        ...state,
        chiSquareTableValue: newChiSquareTableValue,
        pointsNormal: newPointsNormal,
        resultNormalReal: newResultNormalReal,
        resultNormalApproximate: newResultNormalApproximate,
        averageNormalApproximate: newAverageNormalApproximate,
        varianceNormalApproximate: newVarianceNormalApproximate,
        averageNormalError: newAverageNormalError,
        varianceNormalError: newVarianceNormalError,
        chiSquareNormal: newChiSquareNormal,
        duration: newDuration
      };
    }
    default: {
      return state;
    }
  }
};

export default statisticsReducer;