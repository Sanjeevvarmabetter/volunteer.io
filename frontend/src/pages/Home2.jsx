import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import VolunteerCampaigns from "./components/VolunteerCampaigns";

function Dash() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');
  const [place, setPlace] = useState('');

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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-3xl text-green-600 mb-4 uppercase">WELCOME {userData.role}.</h1>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            
            <select className="border border-gray-300 p-2 rounded" onChange={handlePlaceChange}>
              <option value="">Place</option>
              <option value="Visakhapatnam">Visakhapatnam</option>
              <option value="Kakinada">Kakinada</option>
              <option value="Guntur">Guntur</option>
              <option value="Vijayawada">Vijayawada</option>
              <option value="Tirupati">Tirupati</option>
              <option value="Anantapur">Anantapur</option>
              <option value="Kadapa">Kadapa</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6 px-4">
        <h2 className="text-2xl text-green-600 mb-4">Awareness Campaigns</h2>
        <VolunteerCampaigns category={category} place={place} />
      </div>
      <Footer />
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default Dash;
