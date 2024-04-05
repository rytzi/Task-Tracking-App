import { Card } from "./Card"
import { Assigner, Assignee } from "../assets/Graphics"

export const SignupWidget = () => {
    return (
        <div className="signupForm centerY">
            <RoleSelect/>
        </div>
    )
}

const RoleSelect = () => {
    return (
        <div className="roleSelect">
            <div className="title text">Select Your Role</div>
            <div className="roleOptions">
                <Card 
                    className="assigner"
                    cardHeight="110%"
                    cardWidth="30%"
                    content={AssignerCardContent}
                    onClick={AssignerCardOnclick}
                    onHover={RoleOptionOnHover}
                />
                <Card 
                    className="assignee"
                    cardHeight="110%"
                    cardWidth="30%"
                    content={AssigneeCardContent}
                    onClick={AssigneeCardOnclick}
                    onHover={RoleOptionOnHover}
                />
            </div>
        </div>
    )
}

const AssignerCardContent = 
        <>
            <Assigner/>
            <p className="contained subtitle text">Assigner</p>
        </>

const AssignerCardOnclick = () => {
    console.log("assigner card clicked!")
}

const RoleOptionOnHover = () => {
    console.log("card hovered!")
}

const AssigneeCardContent = 
        <>
            <Assignee/>
            <div className="contained subtitle text">Assignee</div>
        </>

const AssigneeCardOnclick = () => {
    console.log("assignee card clicked!")
}