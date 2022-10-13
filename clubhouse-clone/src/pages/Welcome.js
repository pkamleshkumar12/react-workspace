import React from "react";
import style from '../style/welcome.module.css';

export default function Welcome(){
    return (
        <div className={style.welcomeContainer}>
            <h1>Welcome!</h1>
            <div className={style.welcomeInfo}>
                <p>
                    We're working hard to get the clubhouse for everyone!
                    While we wrap up the finishing touches, we're adding people gradually to make sure nothing breaks
                </p>

                <p>
                    Anyone can join with an invite from an existing user or 
                </p>

            </div>
        </div>

    )
}