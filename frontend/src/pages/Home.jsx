import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import Carousel from "./components/Carousel";
import Vol from "./assests/vol.jpg"

const Home = () => {
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
  return (
    <div className="homeMain">
      <NavBar style={{ position: "Sticky" }} />
      <div className="p-4">
        <h1 className="text-xl">Welcome <span className="font-medium text-2xl">{userData.role}</span></h1>
      </div>
      {userData.role === 'organizer' ? (
        <div className="p-6">
          <img src={Vol} alt="" srcset="" />
          <p>
            Welcome to our Organizer platform! We're thrilled to welcome you to our community of event planners, volunteer managers, and community organizers dedicated to making meaningful impact. Our comprehensive suite of services encompasses everything from event planning and management to volunteer coordination and community outreach. Whatever your project entails, we're here to support you every step of the way.
            Discover the power of effective event management and community engagement with our team. Through our success stories and client testimonials, you'll witness firsthand the positive impact our services have had on communities large and small. From organizing fundraisers that exceed expectations to executing community-building initiatives that leave a lasting legacy, our team is committed to delivering excellence and driving positive change. Let's collaborate to turn your vision into reality and create memorable experiences that inspire and uplift.</p>
        </div>
      ) : (
        <div className="p-6">
          <p>
            <img src={Vol} style={{height: '500px', width: '100vw', objectFit: 'cover'}} />
            Welcome to our Volunteer System! At our core, we believe in the power of individuals coming together to create positive change in their communities. Whether you're passionate about environmental sustainability, social justice, or animal welfare, there's a place for you here. Explore our diverse range of volunteer opportunities and discover how you can make a real difference while connecting with like-minded individuals who share your commitment to service.
            Join us in our mission to build a better world through volunteerism. Our purpose is simple yet profound: to inspire and empower individuals to actively engage in community service. By volunteering, you not only contribute to the greater good but also cultivate personal growth, develop valuable skills, and forge meaningful connections. Together, let's create a ripple effect of kindness and compassion that transforms lives and strengthens communities.</p>
        </div>
      )}
      <ToastContainer />
      {/* <Card /> */}
      <Footer />
    </div>
  );
};

export default Home;