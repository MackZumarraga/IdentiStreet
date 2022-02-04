import React from 'react';
import { Link } from "react-router-dom";



class MyProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={`/my_profile`}>Profile</Link>
                <Link to={`/my_profile/add_listing`}>Add Listing</Link>
                <Link to={`/my_profile/my_listings`}>My Listings</Link>
            </div>
        )
    }
}

export default MyProfile;