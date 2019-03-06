const initState = {
  pricing: {},
  itemDetail: {},
  discount: 1,
  loading: false,
  code: 'DISCOUNT'
}

const reducer = (state = initState, action) => {
  switch(action.type){
    case "LOADING":
      return {...state, loading: true};
    case "GET_DATA":
      return {
        ...state, 
        pricing: action.data.pricing, 
        itemDetail:action.data.itemDetails,
        loading: false
      }
    case 'DISCOUNT':
      return {...state, discount: action.num}
    default: 
      return state;
  }
}

export default reducer;

