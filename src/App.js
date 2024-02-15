import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfileRegistration from './profileregistration';
import Profile from './profile';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '../src/App.css'

function App() {
  const [profile, setProfile] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path="/" element={profile ? <Navigate to="/profile" /> : <ProfileRegistration setProfile={setProfile} />} />
          <Route path="/profile" element={profile ? <Profile profile={profile} setProfile={setProfile} /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
