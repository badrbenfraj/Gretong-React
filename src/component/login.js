import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
    render() {
        return (
            <div className="login-form">
                <form>
                    <h2 className="text-center">Log in</h2>       
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Log in</button>
                    </div>
                    <div className="clearfix">
                        <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                        <Link to="/forgot-password" className="pull-right" style={{float: 'right'}}>Forgot Password?</Link>
                    </div>        
                </form>
            </div>  
        );
    }
}

export default Login;