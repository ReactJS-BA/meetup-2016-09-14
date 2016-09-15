export const dashboard = (state = {}, action)  => {

  switch(action.type) {
    case 'FETCH_DASHBOARD_SUCCESS':
    return Object.assign({}, state, action.payload);
    default :
      return state;
  }
};
