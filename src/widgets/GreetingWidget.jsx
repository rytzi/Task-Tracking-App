import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export const GreetingWidget = ({ mode, setMode }) => {
    const [greeting, setGreeting] = useState("");
    const [description, setDescription] = useState("");
    const [question, setQuestion] = useState("");
    const [button, setButton] = useState("");
    const [action, setAction] = useState("");

    useEffect(() => {
        switch (mode) {
            case "login":
                setGreeting("Welcome Back!");
                setDescription("Great to see you again! Log in to manage your tasks.");
                setQuestion("Don't have an account?");
                setButton("Sign Up");
                setAction("signup");
                break;
            case "signup":
                setGreeting("Hi there!");
                setDescription("Let's create your account to start tracking tasks.");
                setQuestion("Already have an account?");
                setButton("Log In");
                setAction("login");
                break;
            default:
                break;
        }
    }, [mode]);

    const handleButtonClick = () => {
        setMode(action);
    };

    return (
        <div className={"centerY greeting " + mode}>
            <div className='title text'>{greeting}</div>
            <div className='subtitle text'>{description}</div>
            <div className='text'>{question}</div>
            <div className='text button' onClick={handleButtonClick}>{button}</div>
        </div>
    );
};

GreetingWidget.propTypes = {
    mode: PropTypes.string,
    setMode: PropTypes.func
};
