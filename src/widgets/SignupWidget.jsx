import { Card } from "./Card"
import { Assigner, Assignee } from "../assets/Graphics"
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const SignupWidget = () => {
    const [role, setRole] = useState("");

    function selectRole(selectedRole) {
        setRole(selectedRole);
    }

    console.log(role);

    switch (role) {
        case "assigner":
            return (
                <div>
                    assigner
                </div>
            )
        case "assignee":
            return (
                <div>
                    why
                </div>
            )
        default:
            return (
                <ThemeContext.Provider value={{ selectRole, role }}>
                    <RoleSelect/>
                </ThemeContext.Provider>
            )
    }
}

const RoleSelect = () => {

    const handleAssignerClick = () => {
        selectRole("assigner");
        console.log(role);
    };

    const handleAssigneeClick = () => {
        selectRole("assignee");
        console.log(role);
    };

    const { selectRole, role } = useContext(ThemeContext);
    return (
        <div className="roleSelect">
            <div className="title text">Select Your Role</div>
            <div className="roleOptions">
                <Card 
                    className="assigner"
                    cardHeight="110%"
                    cardWidth="30%"
                    content={AssignerCardContent}
                    onClick={handleAssignerClick}
                />
                <Card 
                    className="assignee"
                    cardHeight="110%"
                    cardWidth="30%"
                    content={AssigneeCardContent}
                    onClick={handleAssigneeClick}
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

const AssigneeCardContent = 
        <>
            <Assignee/>
            <div className="contained subtitle text">Assignee</div>
        </>