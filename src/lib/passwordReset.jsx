import React from 'react';
import css from './style.css';

function PasswordReset({title = 'Reset Your Password'}){

        return (
          <div className= 'form-background'>
              <form action="" className= 'form'>
                <h3>{title}</h3>
                <label htmlFor="old-password">Old Password</label>
                <input type="password"/> <br/>

                <label htmlFor="new-password">New Password</label>
                <input type="password"/> <br/>

                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password"/>

              </form>
          </div>
        );

}

export default PasswordReset;