import { Card } from "./Card"
import { Assigner, Assignee } from "../assets/Graphics"
import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'

const ThemeContext = createContext(null);

export const SignupWidget = ({users, setMode, updateUserData}) => {
    const [role, setRole] = useState("");
    const [step, setStep] = useState(0);

    function selectRole(selectedRole) {
        setRole(selectedRole);
    }

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [dept, setDept] = useState("placeholder");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");

    const [newUser, setNewUser] = useState([]);

    const resetState = () => {
        setFname("");
        setLname("");
        setDept("placeholder");
        setEmail("");
        setPass1("");
        setPass2("");
        setNewUser([]);
    };

    const accountVerifier = () => {
        const errors = [];

        switch (true) {
            case fname === "":
                errors.push("First name is empty.");
                break;
            case lname === "":
                errors.push("Last name is empty.");
                break;
            case dept === "placeholder":
                errors.push("Department is not selected.");
                break;
            case email === "":
                errors.push("Email is empty.");
                break;
            case pass1 === "":
                errors.push("Password is empty.");
                break;
            case pass2 === "":
                errors.push("Password is empty.");
                break;
            default:
                if (pass1 === pass2) {
                    updateUserData([...users, newUser]);
                    setStep(step + 1);
                } else {
                    errors.push("Passwords do not match.");
                }
                break;
        }

        if (errors.length > 0) {
            console.log("Errors:");
            errors.forEach(error => console.log(error));
        }
    };

    useEffect(() => {
        let userID;

        const isIdUnique = (userID) => {
            if (users && Array.isArray(users)) {
                return users.filter(user => user.id === userID).length === 0;
            }
            return false;
        };

        do {
            userID = Math.floor(100000 + Math.random() * 900000).toString();
        } while (!isIdUnique(userID));

        setNewUser({
            id: userID,
            role: role.charAt(0).toUpperCase() + role.slice(1).toLowerCase(),
            name: fname + " " + lname,
            email: email,
            password: pass1,
            department: dept
        });
    }, [dept, email, fname, lname, pass1, role, users]);

    if (role != "") {
        return (
            <div className="loginForm centerY">
                <form className="form">
                    <div className="title text">Create Account</div>
                    <div className="steps">
                        <div className="numbers text">
                            <div className={"step on"}>{step == 0 ? "1" : "\u2713"}</div>
                            <div className={`connection ${step >= 1 && step <= 2 ? "on" : ""}`}></div>
                            <div className={`step ${step >= 1 ? "on" : ""}`}>{step <= 1 ? "2" : "\u2713"}</div>
                            <div className={`connection ${step == 2 ? "on" : ""}`}></div>
                            <div className={`step ${step >= 2 ? "on" : ""}`}>{step <= 2 ? "3" : "\u2713"}</div>
                        </div>
                        <div className="details text">
                            <div className="description">Personal Details</div>
                            <div></div>
                            <div className="description">Company Details</div>
                            <div></div>
                            <div className="description">Account Details</div>
                        </div>
                    </div>
                    {step === 0 && (
                        <>
                            <div className="inline text">
                                <div className="label text">First Name</div>
                                <div className="label text">Last Name</div>
                            </div>
                            <div className="inline text">
                                <input
                                    className="fname input"
                                    type="text"
                                    required
                                    onChange={(e) => {setFname(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}}
                                    />
                                <input
                                    className="lname input"
                                    type="text"
                                    required
                                    onChange={(e) => {setLname(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}}
                                    />
                            </div>
                            <div className="inline text">
                                <div className="label text">Contact Number</div>
                                <div className="label text">Gender</div>
                                <div className="label text">Birth Date</div>
                            </div>
                            <div className="inline text">
                                <input
                                    className="input"
                                    type="text" />
                                <input
                                    className="input"
                                    type="text" />
                                <input
                                    className="input"
                                    type="date" />
                            </div>
                            <div className="inline text">
                                <div className="label text">Address</div>
                            </div>
                            <div className="inline text address">
                                <input
                                    className="address input"
                                    type="text" />
                            </div>
                        </>)}
                    {step === 1 && (
                        <>
                            <div className="inline text">
                                <div className="label text">Department</div>
                            </div>
                            <div className="inline text">
                                <select value={dept} className="signUpDropdown" onChange={(e) => {setDept(e.target.value)}}>
                                    <option value="placeholder" disabled>Select Department</option>
                                    {Array.from(new Set(users.map(user => user.department))).map((department, index) => (
                                                <option key={index} value={department}>{department}</option>
                                            )
                                        )
                                    }
                                </select>
                            </div>
                            <div className="inline text">
                                <div className="label text">Job Position</div>
                            </div>
                            <div className="inline text">
                                <select value={"placeholder"} className="signUpDropdown" onChange={()=>{}}>
                                    <option value="placeholder" disabled>Select Position</option>
                                </select>
                            </div>
                            <div className="inline text">
                                <div className="label text">Company ID</div>
                            </div>
                            <div className="inline text address">
                                <input
                                    className="input"
                                    type="text" />
                            </div>
                        </>)}
                    {step === 2 && (
                        <>
                        <div className="inline text">
                            <div className="label text">Email</div>
                        </div>
                        <div className="inline text">
                            <input
                                className="input"
                                type="email"
                                required
                                onChange={(e) => {setEmail(e.target.value)}}
                                />
                        </div>
                        <div className="inline text">
                            <div className="label text">Create Password</div>
                        </div>
                        <div className="inline text">
                            <input
                                className="input"
                                type="password"
                                required
                                onChange={(e) => {setPass1(e.target.value)}}
                                />
                        </div>
                        <div className="inline text">
                            <div className="label text">Confirm Password</div>
                        </div>
                        <div className="inline text address">
                            <input
                                className="input"
                                type="password"
                                required
                                onChange={(e) => {setPass2(e.target.value)}}
                                />
                        </div>
                    </>)}
                    {step === 3 && (
                        <div style={{padding: '5rem'}}>
                            <div className="welcome title text">Welcome to Task Tracker!</div>
                            <div className="connection" style={{marginTop: '2rem', marginBottom: '2rem', boxSizing: 'border-box'}}/>
                            <div className="text">Account Successfully Created!</div><br/>
                            <div className="text">You may now log in to your account!</div>
                        </div>)}
                    <div className="inline text" style={{justifyContent: "center"}}>
                        {step > 0 && step < 3 && (<div className="text previous button wide" type="submit" onClick={()=>{setStep(step - 1)}}>Previous</div>)}
                        {3 > step ? (<div className="text button wide" type="submit" onClick={()=>{
                                if (step < 2){
                                    setStep(step + 1);
                                } else if(step === 2){
                                    accountVerifier();
                                }
                            }}>{step < 2 ? 'Next': 'Submit'}</div>
                            ):(<div className="text button wide" type="submit" onClick={(e)=>{
                                e.preventDefault();
                                setMode("login");
                                setTimeout(() => {
                                    resetState();
                                    setRole("");
                                    setStep(0);
                                }, 1000);
                            }}>Log In</div>
                            )}
                    </div>
                </form>
            </div>
        );
    }

    return (
        <ThemeContext.Provider value={{ selectRole, role }}>
            <RoleSelect/>
        </ThemeContext.Provider>
    );
};

SignupWidget.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  setMode: PropTypes.func,
  updateUserData: PropTypes.func
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
                    className="assigner role"
                    cardHeight="110%"
                    cardWidth="30%"
                    content={AssignerCardContent}
                    onClick={handleAssignerClick}
                />
                <Card 
                    className="assignee role"
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