import {getPricingData} from '../server';

const loading = () => {
  return {
    type: 'LOADING'
  }
}
const getData = data => {
  return {
    type: 'GET_DATA',
    data
  }
}

export const fetchData = () => {
  return dispatch => {
    dispatch(loading());
    getPricingData()
      .then(data => {
        dispatch(getData(data))
      });
  }
}

export const useDiscount = num => {
  return {
    type: "DISCOUNT",
    num
  }
}