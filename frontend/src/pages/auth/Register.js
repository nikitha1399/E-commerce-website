import React, { useState,useEffect } from "react";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";


const Register = ({history}) => {
  const [email, setEmail] = useState("");
  // const handleChange = e => setEmail(e.target.value);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
     // url: "http://localhost:3000/register/complete/",
      handleCodeInApp: true,
    };
    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration`
    );
    // save user email in localstorage to be used later to complete registration
    window.localStorage.setItem("emailForRegistration", email);
    // clear state
    setEmail("");
  };
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus /><br/>
      <button type="submit" className="btn btn-raised">Register</button>
    </form>
  );
  return (

    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          <ToastContainer />
          {registerForm()}
        </div>
      </div>
    </div>

  );
};

export default Register;
