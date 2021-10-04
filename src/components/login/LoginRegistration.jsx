import { useEffect, useState } from 'react';
import axios from "axios";

import { useHistory } from "react-router-dom";

import "./LoginRegistration.scss"



const LoginRegistration = () => {
  // Registration 
  const [usernameRegistration, setUsernameRegistration] = useState("");
  const [passwordRegistration, setPasswordRegistration] = useState("");

  // LOGIN 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [ loginStatus, setLoginStatus ] = useState("");

  let history = useHistory();

  const [signUp, setSignUp] = useState(false);


  axios.defaults.withCredentials = true;

  const register = () => {
    axios
    .post("http://localhost:3000/api/register", {
      username: usernameRegistration,
      password: passwordRegistration,
    }).then((response) => {
      console.log(response);
    });
  };
  
  const login = () => {
    axios
    .post("http://localhost:3000/api/login", {
      username: username,
      password: password,
    }).then((response) => {
        if(response.data.message){
            setLoginStatus(response.data.message)
        } else {
            setLoginStatus(response.data[0].username);
            history.push("/")
        }
    });
  };

  useEffect(() => {
    axios
    .get("http://localhost:3000/api/login")
    .then((response) => {
        if (response.data.loggedIn == true ) {
            setLoginStatus(response.data.user[0].username);
            setSignUp(true)
            console.log('setSignUp:', setSignUp)
        }});

    axios
    .get("http://localhost:3000/api/register")
    .then((response) => console.log(response));
        
  }, []);

    return (
        <div className="container-login-page h-screen bg-no-repeat bg-center bg-cover flex justify-center items-center">
            {/* <div className="registration">
                <label>Username</label>
                <input
                type="text"
                onChange={(e) => {
                    setUsernameRegistration(e.target.value);
                }}
                />
                <label>Password</label>
                <input
                type="text"
                onChange={(e) => {
                    setPasswordRegistration(e.target.value);
                }}
                />
                <button onClick={register}> Register </button>
            </div> */}

            <div className="flex flex-col w-64">

                <div className="login">
                    <p className="w-full pl-2 text-white font-thin text-left"> Nom d'utilisateur : </p>
                    <input
                    type="text"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    />
                    <p className="w-full pl-2 text-white font-thin text-left"> Mot de passe : </p>
                    <input
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    />
                    <p className="text-red-500">{loginStatus}</p>
                    <button 
                    
                        className="bg-primary text-lightGray font-bold py-2 px-8 rounded my-2"
                        onClick={login}
                    > 
                    {signUp ? "Se déconnecter" : "Se connecter"}
                    </button>
                </div>

                <div className="">
                    <p className="text-white font-thin cursor-pointer"> Créer un compte </p>
                </div>
           </div>

            
        </div>
    );
  }

  export default LoginRegistration;
