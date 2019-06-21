import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="login-form">
                <form>
                    <h2 className="text-center">Register</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" required="required"/>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="First Name" required="required"/>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Last Name" required="required"/>
                    </div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required="required"/>
                    </div>
                    
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Register</button>
                    </div>      
                </form>
            </div>                            		                            
        );
    }
}

export default Register;