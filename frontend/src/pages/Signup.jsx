import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
    fullname: "",
    phoneNumber: ""
  });
  const [cookies, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyCookie = async () => {
      if (cookies.token) {
        navigate("/");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const {
    email,
    password,
    username,
    fullname,
    phoneNumber
  } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    console.log(inputValue)
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
      fullname: "",
      phoneNumber: ""
    });
  };

  return (
    <div className="centers">
      <div className="form_containers">
        <h1 className="text-2xl">Signup Account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              autoComplete="true"
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              autoComplete="true"
            />
          </div>
          <div>
            <label htmlFor="fullname">FullName</label>
            <input
              type="text"
              name="fullname"
              value={fullname}
              placeholder="Enter your Fullname"
              onChange={handleOnChange}
              autoComplete="true"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">phoneNumber</label>
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              placeholder="Enter your phoneNumber"
              onChange={handleOnChange}
              autoComplete="true"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              autoComplete="true"
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;