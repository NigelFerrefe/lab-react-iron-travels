import travelData from "../assets/data/travel-plans.json";
import { useState } from "react";
import TravelCard from "./TravelCard";
import '../components/TravelList.css'

function TravelList() {
  const [travelsPlans, settravelsPlans] = useState(travelData);

  return (
    <div className="travel-container">
    <div className="travels">
      {travelsPlans.map((travel) => (
        <TravelCard key={travel.id} travel={travel} />
      ))}
      </div>
    </div>
  );
}

export default TravelList;
