import PropTypes from 'prop-types'

export const GreetingWidget = () => {
    return (
        <div className="greeting signup">
            <GreetingContent/>
        </div>
    )
}

const GreetingContent = ({mode}) => {
    switch (mode){
        case "login":
            return (
               <h1>Welcome Back!</h1>
            )
        case "signup":
            return (
                <h1>Hi there!</h1>
            )
    }
}


GreetingContent.propTypes = {
  mode: PropTypes.string,
}