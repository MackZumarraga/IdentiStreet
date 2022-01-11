// import { fetchBenches } from './bench_actions'
// import { fetchListings } from './listing_actions';

// export const UPDATE_FILTER = 'UPDATE_FILTER';

// export const changeFilter = (filter, value) => ({
//   type: UPDATE_FILTER,
//   filter,
//   value
// });

// export const updateFilter = (filter, value) => (dispatch, getState) => {
//   dispatch(changeFilter(filter, value));
//   return fetchBenches(getState().ui.filters)(dispatch);
// };

export const UPDATE_BOUNDS = 'UPDATE_FILTER';

export const updateBounds = bounds => ({
    type: UPDATE_BOUNDS,
    bounds
});