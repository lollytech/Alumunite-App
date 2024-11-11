import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = ({ onAddUser }) => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: '',
    status: true,
    photo: null,
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png'];

    if (file && allowedTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewUser((prevUser) => ({ ...prevUser, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid file type (.jpg, .jpeg, .png)');
    }
  };

  const handleAddUser = () => {
    onAddUser({ ...newUser, id: Date.now() }); // Unique ID
    setNewUser({ name: '', email: '', role: '', status: true, photo: null }); // Reset form
    navigate('/userprofile'); // Navigate back to UserProfile page
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md m-4">
      <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
      <input
        type="text"
        name="name"
        value={newUser.name}
        onChange={handleInputChange}
        placeholder="Name"
        className="border px-2 py-1 mr-2 rounded-md mb-2 w-[30%]"
      />
      <input
        type="email"
        name="email"
        value={newUser.email}
        onChange={handleInputChange}
        placeholder="Email"
        className="border px-2 py-1 mr-2 rounded-md mb-2 w-[30%]"
      />
      <input
        type="text"
        name="role"
        value={newUser.role}
        onChange={handleInputChange}
        placeholder="Role"
        className="border px-2 py-1 mr-2 rounded-md mb-2 w-[30%]"
      />
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={handlePhotoUpload}
        className="block mt-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 mb-2"
      />
      {newUser.photo && (
        <img
          src={newUser.photo}
          alt="Preview"
          className="mt-2 w-12 h-12 rounded-full"
        />
      )}
      <button
        onClick={handleAddUser}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
      >
        Add User
      </button>
    </div>
  );
};

export default AddUser;
