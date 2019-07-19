const initialState = {
  loading: false,
  list: [],
  error: '',
  route: '',
};

const fetchWithUrl = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_DATAS': {
      return {
        ...state,
        loading: true,
        route: action.value,
      };
    }
    case 'SUCCESS_FETCH_DATAS': {
      return {
        loading: false,
        list: [...action.datas],
        route: state.route,
        error: '',
      };
    }
    case 'ERROR_FETCH_DATAS': {
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

export default fetchWithUrl;