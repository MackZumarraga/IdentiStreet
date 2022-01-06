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
        this.props.processForm(demoUser).then(this.props.closeModal);
    };

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    };

    renderErrors() {
        return(
            <ul className="error-ul">
                {this.props.errors.map((error, i) => (
                    <li className="error-li" key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    };

    errorTrue() {
        if (this.props.errors.length === 0) {
            return false;
        } else {
            return true;
        }
    };

    render() {
        const formTypeName = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';
        
        return(
            <div className="session-form">
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit} >
                    <div className="close-x-container">
                        <div onClick={this.props.closeModal} className="close-x">✖</div>
                    </div>
                    
                    <br/>
                    <h3 id="form-name">{formTypeName}</h3>
                    <br/>

                    <p className="session-message">Take full advantage of IdentiStreet's features</p>

                    <br/>
                    <label>EMAIL
                        <br/>
                        <input type="text" value={this.state.email} onChange={this.update('email')} className={this.errorTrue() ? "error-true" : null}/>
                    </label>
                    <br/>
                    <label>PASSWORD
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.update('password')} className={this.errorTrue() ? "error-true" : null}/>
                    </label>
                    
                    <div className="errors">
                        {this.renderErrors()}
                        <br/>
                    </div>
                    
                    <button type="submit" value={this.props.formType}>{formTypeName}</button>

                    <br/>

                    <div className="or"></div>

                    <br/>
                    
                    <button className="demo" onClick={this.handleDemoSubmit}>Demo</button>

                    <br/>

                    <div>
                        {this.props.otherForm}
                    </div>

                   
                </form>
                
            </div>
        )
    }
};

export default withRouter(SessionForm);