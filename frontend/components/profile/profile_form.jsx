import React from 'react';
import { fetchCurrentUser } from '../../util/profile_api_util';


class MyProfileForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.currentUser

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.updateCurrentUser(this.state).then(() => fetchCurrentUser(this.state.id));
        this.props.updateCurrentUser(this.state);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteCurrentUser(this.state.id);
        this.props.logout();
        this.props.fetchListings(getState().ui.filters);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        debugger
        const nameTempValue = this.state.name == null ? "" : this.state.name
        const phoneNoTempValue = this.state.phone_number == null ? "" : this.state.phone_number

        return (
            <div>
                <div className="profile-form-border">
                    <form className="profile-form-container-in" onSubmit={this.handleSubmit}>
                        <label className="input-holder">
                            <div className="input-label">NAME</div>
                            <input
                                className="profile-form-input" 
                                type="text" 
                                value={nameTempValue}
                                onChange={this.update('name')}
                            />
                        </label>
                        <label className="input-holder">
                            <div className="input-label">EMAIL</div>
                            <input 
                                className="profile-form-input"
                                type="text" 
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <label className="input-holder">
                            <div className="input-label">PHONE</div>
                            <input 
                                className="profile-form-input"
                                type="text" 
                                value={phoneNoTempValue}
                                onChange={this.update('phone_number')}
                            />
                        </label>
                        <button className="save-changes-button" type="submit">SAVE CHANGES</button>
                    </form>
                </div>
                <div className="delete-account-container">
                    <h3 className="delete-information">Delete Profile</h3>
                    <p className="delete-text">Once you delete this account, there is no going back. Please be certain.</p>
                    <button className="delete-profile-button" onClick={this.handleDelete}>DELETE ACCOUNT</button>
                </div>
            </div>
        )
    }
}

export default MyProfileForm;