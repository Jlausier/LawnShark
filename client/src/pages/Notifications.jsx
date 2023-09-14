import React from "react";
import NotificationCard from "../components/NotificationCard";
import { testData } from "../utils/testData"; 

export default function Notifications() {
  return (
    <div className="container p-5">
      <div className="border p-4 rounded">
        <h2 className="header">Notifications</h2>
        <div className="d-flex flex-column">
          {testData.map((notification, index) => (
            <NotificationCard key={index} {...notification} />
          ))}
        </div>
      </div>
    </div>
  );
}