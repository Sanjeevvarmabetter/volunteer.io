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
        const fetchUserData = async () => {
            try {
                setLoading(true);
                setError(null);
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

    const timestamp = userData.createdAt;
    const date = new Date(timestamp);
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

    return (
        <div className="bg-gray-100 h-screen">
            <NavBar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">User Profile</h1>
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="font-bold">Username:</div>
                        <div>{userData.username}</div>
                        <div className="font-bold">Email:</div>
                        <div>{userData.email}</div>
                        <div className="font-bold">Role:</div>
                        <div>{userData.role}</div>
                        <div className="font-bold">Phone Number:</div>
                        <div>{userData.phoneNumber}</div>
                        <div className="font-bold">Created At:</div>
                        <div>{formattedDate}</div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Profile;
