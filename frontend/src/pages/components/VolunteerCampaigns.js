import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VolunteerCampaigns = ({ category, place }) => {
  const [allCampaigns, setAllCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading campaign data</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCampaigns.map((campaign) => (
        <div key={campaign._id} className="bg-pink-500 text-white p-4 rounded">
          <img src={campaign.image} alt="Campaign" className="w-full h-32 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold mt-2">{campaign.event_name}</h3>
          <p className="text-sm">{campaign.description}</p>
          <p className="text-sm">Location: {campaign.place}</p>
          <p className="text-sm">Date: {new Date(campaign.datetime).toLocaleString()}</p>
          <p className="text-sm">Organizer: {campaign.organized_name}</p>
          <p className="text-sm">Volunteers Needed: {campaign.no_of_volunteers}</p>
        </div>
      ))}
    </div>
  );
};

export default VolunteerCampaigns;
