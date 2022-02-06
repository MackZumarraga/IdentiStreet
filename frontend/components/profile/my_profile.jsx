import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import MyProfileForm from './profile_form';



class MyProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger
        const myProfileFormClass = this.props.match.path === `/my_profile` ? "my-profile-form-container-show" : "my-profile-form-container-none"
        const { currentUser, 
                fetchCurrentUser, 
                updateCurrentUser, 
                deleteCurrentUser, 
                logout, 
                fetchListings,
                fetchUsers,
                users
                } = this.props

        debugger
        const myProfileContainerClass = this.props.match.path === '/my_profile/add_listing' ? "my-profile-in-listing-form-container" : "my-profile-container"

        return (
            <div className="my-profile-width-maker">
                <div className={myProfileContainerClass}>
                    <div className="profile-links-container">
                        <Link className="profile-link" to={`/my_profile`}>PROFILE</Link>
                        <Link className="profile-link" to={`/my_profile/add_listing`}>SUBMIT LISTING</Link>
                        <Link className="profile-link" to={`/my_profile/my_listings`}>MY LISTINGS</Link>
                        <Link className="profile-link" to={`/my_profile/my_favorite_listings`}>SAVED LISTINGS</Link>
                    </div>
                    <div className={myProfileFormClass}>
                        <h3 className="personal-information">Personal Information</h3>
                        <MyProfileForm
                            fetchCurrentUser={fetchCurrentUser}
                            currentUser={currentUser}
                            updateCurrentUser={updateCurrentUser}
                            deleteCurrentUser={deleteCurrentUser}
                            logout={logout}
                            fetchListings={fetchListings}
                            fetchUsers={fetchUsers}
                            users={users}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MyProfile);
// export default MyProfile; -mack path doesn't work without withRouter