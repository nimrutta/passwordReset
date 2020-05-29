import React from 'react';
import css from './style.css';

function PasswordReset({title = 'Reset Your Password'}){

        return (
          <div className= 'form-background'>
              <form action="" className= 'form'>
                <h3>{title}</h3>
                <div>
                  <label htmlFor="old-password">Old Password</label>
                  <input type="password"/> <br/>
                </div>

                <div>
                  <label htmlFor="new-password">New Password</label>
                  <input type="password"/> <br/>
                </div>

                <div>
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input type="password"/>
                </div>

              </form>
          </div>
        );

}

export default PasswordReset;