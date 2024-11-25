// components/NotificationManager.jsx

import React, { useState } from 'react';
import './NotificationManager.css';

const NotificationManager = () => {
  const [notifications, setNotifications] = useState([
    'New task assigned: Complete your project report.',
    'Reminder: Meeting at 3 PM today.',
    'Task Completed: "Design Mockups" was finished.',
  ]);

  const handleDismiss = (index) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  return (
    <div className="notification-manager">
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <div key={index} className="notification">
            <p>{notification}</p>
            <button onClick={() => handleDismiss(index)}>Dismiss</button>
          </div>
        ))
      ) : (
        <p>No notifications.</p>
      )}
    </div>
  );
};

export default NotificationManager;
