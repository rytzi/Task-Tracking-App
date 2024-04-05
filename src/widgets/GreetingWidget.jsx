import PropTypes from 'prop-types'
import { useEffect } from 'react';

// merge conflict

export const GreetingWidget = ({mode, setMode}) => {
    var greeting, description, question, button, action;
    useEffect(() => {
        switch (mode) {
            case "login":
                greeting = "Welcome Back!";
                description = "Great to see you again! Log in to manage your tasks.";
                question = "Don't have an account?";
                button = "Sign Up";
                action = "signup";
                break;
            case "signup":
                greeting = "Hi there!";
                description = "Lets create your account to start tracking tasks.";
                question = "Already have an account?";
                button = "Log In";
                action = "login";
                break;
        }
    }, [mode])
    greeting = "Hi there!";
                description = "Lets create your account to start tracking tasks.";
                question = "Already have an account?";
                button = "Log In";
                action = "login";
    return (
        <div className="centerY greeting login">
            <div className='title text'>{greeting}</div>
            <div className='subtitle text'>{description}</div>
            <div className='text'>{question}</div>
            <div className='text button' onClick={setMode(action)}>{button}</div>
        </div>
    )
}

GreetingWidget.propTypes = {
  mode: PropTypes.string,
  setMode: PropTypes.func
}