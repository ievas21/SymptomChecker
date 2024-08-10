import styled from "styled-components";
import {useState} from "react";

const StyledDiv = styled.div`
    width: 400px;
    height: 400px;
    margin: 6em auto;
    border-radius: 1.5em;
    box-shadow: 0 11px 35px 2px rgba(0, 0, 0, 0.14);
    background-color: #FFFFFF;
`;

const StyledP = styled.p`
    padding-top: 40px;
    color: #fd6a4a ;
    font-family: Georgia, serif;
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 3px;
    display: flex;
    justify-content: center;
    text-align: center;
`;

const StyledInput = styled.input`
    width: 82%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: #FFFFFF;
    padding: 15px 20px;
    border-radius: 20px;
    border: 2px solid #808080;
    margin: 25px 15px;
    text-align: center;
    display: flex;
    justify-content: center;
`;

const StyledForm = styled.form`
    padding-top: 10px;
    padding-bottom: 8px;
`;


const StyledButton = styled.button`
    cursor: pointer;
    border-radius: 5em;
    color: #fff;
    font-family: "Monaco", "Courier New", serif;
    font-weight: bold;
    background: linear-gradient(147deg, #ff753b 45%, #FF2525 75%);
    border: 0;
    padding: 10px 40px;
    margin-top: 2px;
    margin-left: 35%;
    font-size: 15px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
`;

const StyledMessage = styled.p`
    padding-top: 15px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-family: "Monaco", "Courier New", serif;
    
`;

const SignUpDiv = styled.div`
    width: 600px;
    height: 80px;
    margin: 0 auto;
    padding: 0 15px;
    border-radius: 20px;
    box-shadow: 0 11px 35px 2px rgba(0, 0, 0, 0.14);
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const StyledAccount = styled.p`
    display: inline-block;
    font-family: Georgia, serif;
    font-weight: bold;
    font-size: 25px;
    margin: 0; 
    padding: 0;
    color: #f4253a;
`;

const Signup = styled.button`
    cursor: pointer;
    border-radius: 20px;
    color: #fff;
    font-family: "Monaco", "Courier New", serif;
    font-weight: bold;
    background: #f4253a;
    border: 0;
    padding: 10px 40px;
    margin-left: 10px; 
    font-size: 15px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
`;


export default function Login() {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    async function handleSubmit() {

        if (user === pass) {
            setIsLoggedIn(true);

        } else (
            setMessage('Error, try again!')
        );
    }

    return (
        <>
            <StyledDiv>
                <StyledP>Login to Your Account</StyledP>
                <StyledForm>
                    <StyledInput type="text" placeholder="Email" onChange={(e) => setUser(e.target.value)}/>
                    <StyledInput type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
                </StyledForm>

                <StyledButton type="submit" onClick={handleSubmit}>Login</StyledButton>

                <StyledMessage>{message}</StyledMessage>
            </StyledDiv>

            <SignUpDiv>
                <StyledAccount>New User?</StyledAccount>
                <Signup>Create an Account</Signup>
            </SignUpDiv>
        </>
    );
}