import React from "react";
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
       
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state) 
        this.props.processForm(user).then(this.props.closeModal);
    };

    handleDemoSubmit(e) {
        e.preventDefault();
        const demoUser = {
            email: 'guest@example.com',
            password: 'password'
        } 
        this.props.processForm(demoUser);
    };

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    };

    renderErrors() {
        return(
            <ul className="error-ul">
                {this.props.errors.map((error, i) => (
                    <li className="error-li" key={{i}}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    };


    render() {
        const formTypeName = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';

        return(
            <div className="session-form">
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <h3 id="form-name">{formTypeName}</h3>
                <br/>

                <p className="session-message">Take full advantage of IdentiStreet's features</p>

                <br/>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit} >
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
                    <button type="submit" value={this.props.formType}>{formTypeName}</button>

                    <br/>

                    <div className="or"></div>

                    <br/>
                    
                    <button className="demo" onClick={this.handleDemoSubmit}>Demo</button>

                    <br/>

                    <div>
                        {this.props.otherForm}
                    </div>

                    <br/>
                    <div className="errors">
                        {this.renderErrors()}
                    </div>
                </form>
                
            </div>
        )
    }
};

export default withRouter(SessionForm);