import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"

import * as SessionActions from "./actions/session_actions"
import * as ListingApiUtils from "./util/listing_api_util"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    
    let store;
    if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.signup = SessionActions.signup;
    window.login = SessionActions.login;
    window.logout = SessionActions.logout;

    window.fetchListings = ListingApiUtils.fetchListings;
    window.fetchListing = ListingApiUtils.fetchListing;
    window.createListing = ListingApiUtils.createListing;
    window.updateListing = ListingApiUtils.updateListing;
    window.deleteListing = ListingApiUtils.deleteListing;

    ReactDOM.render(<Root store={store} />, root);    
});