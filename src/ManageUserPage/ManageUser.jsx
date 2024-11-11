import React, { useState } from 'react';

const ManageUser = ({ users, onUpdateUser }) => {
  const [editingUser, setEditingUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png'];

    if (file && allowedTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        setUpdatedUser((prevUser) => ({ ...prevUser, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid file type (.jpg, .jpeg, .png)');
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
    setUpdatedUser(user);
  };

  const handleUpdateUser = () => {
    onUpdateUser(updatedUser);
    setEditingUser(null);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md m-4 md:overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">Manage User</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="py-2 px-4 text-left">{user.name}</td>
                <td className="py-2 px-4 text-left">{user.email}</td>
                <td className="py-2 px-4 text-left">{user.role}</td>
                <td className="py-2 px-4 text-left">
                  <span
                    className={`px-2 py-1 rounded-md ${
                      user.status ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}
                  >
                    {user.status ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="py-2 px-4 text-left">
                  <button
                    onClick={() => handleEditClick(user)}
                    className="text-[#047857] hover:text-[#047857]"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Edit User</h3>
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="border px-2 py-1 mb-2 rounded-md w-full"
            />
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border px-2 py-1 mb-2 rounded-md w-full"
            />
            <input
              type="text"
              name="role"
              value={updatedUser.role}
              onChange={handleInputChange}
              placeholder="Role"
              className="border px-2 py-1 mb-2 rounded-md w-full"
            />
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={handlePhotoUpload}
              className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 mb-2"
            />
            {updatedUser.photo && (
              <img
                src={updatedUser.photo}
                alt="Preview"
                className="mt-2 w-12 h-12 rounded-full"
              />
            )}
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleUpdateUser}
                className="px-4 py-2 bg-green-600 text-white rounded-md"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditingUser(null)}
                className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUser;
