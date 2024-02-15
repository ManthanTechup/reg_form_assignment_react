import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Profile = ({ setProfile }) => {
  const location = useLocation();
  if (location?.state?.profile) {
    var { firstName, lastName, email } = location?.state?.profile;
  }
  else {
    setProfile(false);
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="w-50 card my-5">
        <h2>Profile</h2>
        <p>
          <strong>First Name : </strong>
          {firstName && firstName}
        </p>
        <p>
          <strong>Last Name : </strong>
          {lastName && lastName}
        </p>
        <p>
          <strong>Email : </strong>
          {email && email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
