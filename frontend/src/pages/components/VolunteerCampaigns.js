import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const VolunteerCampaigns = ({ category, place }) => {
  const [allCampaigns, setAllCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

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

  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('http://localhost:5000/event');
        setAllCampaigns(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching campaign data');
        setLoading(false);
      }
    };

    fetchCampaignData();
  }, []);

  useEffect(() => {
    let filtered = allCampaigns;

    if (category) {
      filtered = filtered.filter(campaign => campaign.category === category);
    }

    if (place) {
      filtered = filtered.filter(campaign => campaign.place === place);
    }

    setFilteredCampaigns(filtered);
  }, [category, place, allCampaigns]);

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleRegister = async (id, event_name, place, description) => {
    try {
      const x = userData.email;
      const y = userData.username;
      const {data} = await axios.post(
        'http://localhost:5000/registeration',
        {
          id, 
          event_name, 
          x, 
          place,
          y,
          description
        }, 
        {withCredentials: true}
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
    }catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading campaign data</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {filteredCampaigns.map((campaign) => (
        <div
          key={campaign._id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <img
            src={campaign.image}
            alt="Campaign"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{campaign.event_name}</h3>
            <p className="text-gray-600 mt-2">{campaign.description}</p>
            <p className="text-gray-500 mt-2">
              <strong>Location:</strong> {campaign.place}
            </p>
            <p className="text-gray-500 mt-2">
              <strong>Date:</strong> {new Date(campaign.datetime).toLocaleString()}
            </p>
            <p className="text-gray-500 mt-2">
              <strong>Organizer:</strong> {campaign.organized_name}
            </p>
            <p className="text-gray-500 mt-2">
              <strong>Volunteers Needed:</strong> {campaign.no_of_volunteers}
            </p>
            <button
              className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              onClick={() => handleRegister(campaign._id, campaign.event_name, campaign.place, campaign.description)}
            >
              Register
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VolunteerCampaigns;
