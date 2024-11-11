import React from 'react';

const UserProfile = ({ users, toggleStatus, deleteUser }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md m-4 md:overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <div className="overflow-x-auto"> 
        <table className="min-w-full bg-white text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Profile Photo</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => toggleStatus(user.id)}
                    className={`px-2 py-1 rounded-md ${
                      user.status ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}
                  >
                    {user.status ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td className="py-2 px-4">
                  {user.photo && (
                    <img
                      src={user.photo}
                      alt="Profile"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                    />
                  )}
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfile;
