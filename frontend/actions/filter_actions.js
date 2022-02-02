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

// import { fetchListings } from './listing_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const clearActionFilter = () => ({
    type: CLEAR_FILTER
});

// export const updateFilter = (filter, value) => (dispatch, getState) => {
//   dispatch(changeFilter(filter, value));
//   return fetchListings(getState().ui.filters)(dispatch);

export const updateFilter = (filter, value) => dispatch => {
    debugger
    return (
        dispatch(changeFilter(filter, value))
    )
    // return fetchListings(getState().ui.filters)(dispatch);
};

export const clearFilter = () => dispatch => {
    dispatch(clearActionFilter());
    // return fetchListings(getState().ui.filters)(dispatch);
};