const initialState = {
  loading: false,
  list: [],
  error: '',
  route: '',
};

const putWithUrl = (state = initialState, action) => {
  switch (action.type) {
    case 'START_PUT_DATAS': {
      return {
        ...state,
        loading: true,
        route: action.value,
      };
    }
    case 'SUCCESS_PUT_DATAS': {
      return {
        loading: false,
        list: [...action.datas],
        route: state.route,
        error: '',
      };
    }
    case 'ERROR_PUT_DATAS': {
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    }
    default:
      return state;
  }
};

export default putWithUrl;