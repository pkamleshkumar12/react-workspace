import React from "react";
import style from '../style/welcome.module.css';
import { Link } from "react-router-dom";


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
                    Anyone can join with an invite from an existing user or reserve your username and we'll text you if you have a friend on the app who can let you in. We are so gratefull you're here and can't wait to have you join!
                </p>
                <p>
                    Kamlesh & the Clubhouse team
                </p>
            </div>
            <div className={style.actionBtn}>
                <Link  to='/get_username' className='primaryBtn d-flex align-items-center mb-3'>
                   Get your username{" "}
                   {/* <img src="" alt=""/> */}
                </Link>
                <Link>Have an invite text? Sign in</Link>
            </div>
        </div>

    )
}