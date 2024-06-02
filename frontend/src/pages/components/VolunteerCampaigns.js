import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VolunteerCampaigns = ({ category, place }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('http://localhost:5000/campaigns', {
          params: {
            category,
            place,
          },
        });
        setCampaigns(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching campaign data');
        setLoading(false);
      }
    };

    fetchCampaignData();
  }, [category, place]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading campaign data</p>;

  return (
    <div>
      {campaigns.map((campaign, index) => (
        <div key={index} className="bg-pink-500 text-white p-4 m-2 rounded">
          <img src={campaign.imageUrl} alt="Campaign Image" className="w-full h-32 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold mt-2">{campaign.title}</h3>
          <p className="text-sm">{campaign.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VolunteerCampaigns;
