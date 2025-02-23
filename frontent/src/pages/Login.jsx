import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSumitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "sign Up" ? "Create Account" : "login"}
        </p>
        <p>
          Please {state === "sign Up" ? "sign up" : "login"} to book appointment
        </p>
        {state==='sign Up'&&<div className="w-full">
          <p>Full Name</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            onChange={(e) => setName(e.target.name)}
            value={name}
          />
        </div>}
        
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.name)}
            value={email}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="current-password"
            onChange={(e) => setPassword(e.target.name)}
            value={password}
          />
           
      </div>
      <button className="bg-primary text-white w-full py-2 rounded-md text-base">{state === "sign Up" ? "Cteate Account" : "login"}</button>
      {state==='sign Up'? <p>Already have an account? <span onClick={()=>setState('login')} className="text-primary underline cursor-pointer">Login here</span> </p>:<p>create an new account? <samp onClick={()=>setState('sign Up')} className="text-primary underline cursor-pointer">click here</samp></p>}
        </div>
       
    </form>
  );
};

export default Login;
