const tokenFromLocalStorage = localStorage.getItem('login');

const initialState = {
  token: tokenFromLocalStorage,
};

const logAdmin = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_ADMIN': {
      return { ...action.admin };
    }
    default:
      return state;
  }
};

export default logAdmin;