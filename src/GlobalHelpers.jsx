import { useState } from "react";

export const useActiveComponent = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const setActive = (component) => {
        setActiveComponent(component);
    };

    return [activeComponent, setActive];
};

export const useRole = () => {
    const [userRole, setUserRole] = useState(null);

    const setRole = (role) => {
        setUserRole(role);
    };

    return [userRole, setRole]
}