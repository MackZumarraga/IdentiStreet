import React from 'react';
import { fetchCurrentUser } from '../../util/profile_api_util';


class MyProfileForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.currentUser

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.update = this.update.bind(this);
        this.validEmail = this.validEmail.bind(this);
        this.validPhone = this.validPhone.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        // this.props.updateCurrentUser(this.state).then(() => fetchCurrentUser(this.state.id));
        if (this.validEmail() && this.validPhone()) {
            this.props.updateCurrentUser(this.state);
            // console.log('Will update current user')
        } else {
            console.log('Invalid form data')
        }
        // this.props.fetchUsers();
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteCurrentUser(this.state.id);
        this.props.logout();
        this.props.fetchListings(getState().ui.filters);
    }

    update(field) {
        // this.props.fetchUsers();
        return e => this.setState({[field]: e.currentTarget.value})
    }

    validEmail() {
        debugger
        const { users } = this.props
        const ownEmail = this.props.currentUser["email"]
        const typedEmail = this.state["email"]
        const emails = []; //other emails different from current user's email

        for (let i = 0; i < users.length; i++) {
            const currEmail = users[i]["email"]
            if (ownEmail !== currEmail) {
                emails.push(users[i]["email"])
            }
        };

        const emailAtWords = typedEmail.split('@')
        const emailDotWords = typedEmail.split('.')

        const result = (emails.includes(typedEmail) || 
        !ownEmail.includes('@') || 
        emailAtWords.length !== 2 || 
        emailDotWords.length !== 2) ? false : true
        
        return result;
    }

    validPhone() {
        const { users } = this.props
        const ownPhone = this.props.currentUser["phone_number"]
        const typedPhone = this.state["phone_number"]
        const phones = [];
        const alpha = "abcdefghijklmnopqrstuvwxyz"

        for (let i = 0; i < users.length; i++) {
            const currPhone = users[i]["phone_number"]
            if (ownPhone !== currPhone) {
                phones.push(currPhone)
            }
        };

        const anyAlpha = typedPhone.split('').some(letter => alpha.includes(letter))
        
        
        const result = (phones.includes(typedPhone) || typedPhone.length !== 10 || anyAlpha) ? false : true
        debugger
        return result;
        
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