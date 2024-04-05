import PropTypes from 'prop-types'

export const GreetingWidget = () => {
    return (
        <div className="centerY greeting login">
            <GreetingContent mode={"login"}/>
        </div>
    )
}

const GreetingContent = ({mode}) => {
    switch (mode){
        case "login":
            return (
                <>
                    <div className='title text'>Welcome Back!</div>
                    <div className='subtitle text'>Great to see you again! Log in to manage your tasks.</div>
                    <div className='text'>Dont have an account?</div>
                    <div className='text button'>Sign Up</div>
                </>
            )
        case "signup":
            return (
                <>
                    <div className='title text'>Hi there!</div>
                    <div className='subtitle text'>Lets create your account to start tracking tasks.</div>
                    <div className='text'>Already have an account?</div>
                    <div className='text button'>Log in</div>
                </>
            )
    }
}


GreetingContent.propTypes = {
  mode: PropTypes.string,
}