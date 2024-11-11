import React, { useEffect, useState } from 'react'
import Nav from './NavComponent/Nav'
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import Footer from './FooterPage/Footer'
import UserProfile from './UserProfilePage/UserProfile'
import AddUser from './AddUserPage/AddUser'
import ManageUser from './ManageUserPage/ManageUser'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Import the image from src/assets
import profilePhoto from './Assests/Frame 19.png';

function App() {

   // Load initial users from localStorage or set default list
   const loadUsers = () => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: true, photo: profilePhoto },
    ];
  };

  const [users, setUsers] = useState(loadUsers);

  // Save users to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const toggleStatus = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: !user.status } : user
      )
    );
  };

  // Delete user function
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
  };

  const location = useLocation();

    // Define routes where the navbar should be excluded
    const hideNavbarRoutes = ['/'];

     // Check if the current route is in the hideNavbarRoutes list
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);
  return (
    <div className=' min-h-[100svh] flex flex-col justify-between'>
      {/* Conditional rendering of Navbar */}
      {showNavbar && <Nav />}

      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/userprofile" element={<UserProfile users={users} toggleStatus={toggleStatus} deleteUser={deleteUser}  />} />
        <Route path="/adduser" element={<AddUser onAddUser={handleAddUser}  />} />
        <Route path="/manageuser" element={<ManageUser users={users} onUpdateUser={updateUser} />} />
      </Routes>
      <Footer>
        <Footer/>
      </Footer>
    </div>
  )
}

export default App
