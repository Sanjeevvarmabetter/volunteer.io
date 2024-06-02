import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Profile = () => {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
                navigate("/login");
            }
            const { data } = await axios.post(
                "http://localhost:5000",
                {},
                { withCredentials: true }
            );
            const { status, user } = data;
            setUsername(user);
            return status
                ? toast(`Hello ${user}`, {
                    position: "top-right",
                })
                : (removeCookie("token"), navigate("/login"));
        };
        verifyCookie();
    }, [cookies, navigate, removeCookie]);
    useEffect(() => {
        // Function to fetch user data
        const fetchUserData = async () => {
            try {
                setLoading(true);
                setError(null);
                // Make a GET request to fetch user data by username
                const response = await axios.get(`http://localhost:5000/user/userdetails/${username}`);
                setUserData(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching user data');
                setLoading(false);
                console.log(error)
            }
        };
        fetchUserData();
    }, [username]);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    console.log(userData)
    const timestamp = userData.createdAt;
    const date = new Date(timestamp);

    // Extracting hours, minutes, seconds, and milliseconds
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    // const milliseconds = date.getMilliseconds();

    // Formating the date
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is zero-based, so adding 1
    const day = date.getDate();
    const dat = `${year}-${month}-${day}`;
    // const tim = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    return (
        <div className="homeMain h-screen">
            <NavBar style={{ position: "Sticky" }} />
            <div className="p-4">
                <h1 className="text-3xl my-2">Profile</h1>
                <table>
                    <tr >
                        <td className="font-bold">Username </td>
                        <td className="pl-1">: {userData.username}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">Email </td>
                        <td className="pl-1">: {userData.email}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">Role </td>
                        <td className="pl-1">: {userData.role}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">Phone Number </td>
                        <td className="pl-1">: {userData.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">Created At </td>
                        <td className="pl-1">: {dat}</td>
                    </tr>
                </table>
            </div>
            <ToastContainer />
            <Footer style={{ position: "absolute", bottom: '0', left: '0' }} />
        </div>
    );
};

export default Profile;