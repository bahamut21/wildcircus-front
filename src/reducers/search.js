const initialState = {
  loading: false,
  list: [],
  error: '',
  route: '',
  key: '',
  search: '',
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'START_SEARCH_FETCH_DATAS': {
      return {
        ...state,
        loading: true,
        route: action.value,
        key: action.key,
        search: action.search
      };
    }
    case 'SUCCESS_SEARCH_FETCH_DATAS': {
      return {
        loading: false,
        list: [...action.datas],
        route: state.route,
        key: state.key,
        search: state.search,
        error: '',
      };
    }
    case 'ERROR_SEARCH_FETCH_DATAS': {
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

export default search;