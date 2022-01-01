import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state) 
        this.props.processForm(user);
    };

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    };

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={{i}}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    };


    render() {

        return(
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>EMAIL
                        <br/>
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <br/>
                    <label>PASSWORD
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <br/>
                    <br/>
                    <button type="submit" value={this.props.formType}>{this.props.formType}</button>
                </form>
                <br/>
                {this.renderErrors()}
                <div>
                    or
                    <br/>
                    {this.props.navLink} instead!
                </div>
            </div>
        )
    }
};

export default SessionForm;