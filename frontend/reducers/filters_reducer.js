import { UPDATE_FILTER } from '../actions/filter_actions';
import { CLEAR_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  minPrice: "",
  maxPrice: "",
  location: "",
  bedrooms: "",
  broker_fee: "",
  pets_allowed: ""
});

// const filtersReducer = (state = defaultFilters, action) => {
//   Object.freeze(state);
//   if (action.type === UPDATE_FILTER) {
//     const newFilter = {
//       [action.filter]: action.value
//     };
//     return Object.assign({}, state, newFilter);
//   } else if (action.type === CLEAR_FILTER) {
//     return state;
//   } else {
//     return state;
//   }
// };

// export default filtersReducer;


const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
      case UPDATE_FILTER:
        const newFilter = {
            [action.filter]: action.value
        };
        return Object.assign({}, state, newFilter);
      case CLEAR_FILTER:
        debugger
        return defaultFilters;
      default:
        return state;
    }
  };
  
  export default filtersReducer;