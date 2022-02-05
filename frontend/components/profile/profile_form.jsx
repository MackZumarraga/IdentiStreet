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
        this.props.deleteCurrentUser(this.state.id)
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        // debugger
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>NAME
                            <input 
                                type="text" 
                                value={this.state.name}
                                onChange={this.update('name')}
                            />
                        </label>
                        <label>EMAIL
                            <input 
                                type="text" 
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <label>PHONE
                            <input 
                                type="text" 
                                value={this.state.phone_number}
                                onChange={this.update('phone_number')}
                            />
                        </label>
                        <button type="submit">SAVE CHANGES</button>
                    </form>
                </div>
                <div>
                    <button onClick={this.handleDelete}>DELETE ACCOUNT</button>
                </div>
            </div>
        )
    }
}

export default MyProfileForm;