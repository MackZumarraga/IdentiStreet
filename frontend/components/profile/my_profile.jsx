import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import MyProfileForm from './profile_form';



class MyProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myProfileFormClass = this.props.match.path === `/my_profile` ? "my-profile-form-container-show" : "my-profile-form-container-none"
        const { currentUser, updateCurrentUser, deleteCurrentUser } = this.props

        return (
            <div>
                <div>
                    <Link to={`/my_profile`}>Profile</Link>
                    <Link to={`/my_profile/add_listing`}>Add Listing</Link>
                    <Link to={`/my_profile/my_listings`}>My Listings</Link>
                </div>
                <div className={myProfileFormClass}>
                    <MyProfileForm
                        currentUser={currentUser}
                        updateCurrentUser={updateCurrentUser}
                        deleteCurrentUser={deleteCurrentUser}
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(MyProfile);
// export default MyProfile; -mack path doesn't work without withRouter