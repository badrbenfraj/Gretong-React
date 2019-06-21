import React, { Component } from 'react';

class ForgotPassword extends Component {
    render() {
        return (
            <div className="login-form">
                <form>
                    <h2 className="text-center">Reset Password</h2>       
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your Email" required="required"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Reset</button>
                    </div>       
                </form>
            </div>  
        );
    }
}

export default ForgotPassword;