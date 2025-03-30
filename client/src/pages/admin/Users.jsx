import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/css/admin.css';
import AdminNavbar from '../../components/common/AdminNavbar';

export default function Users() {
    const [users, setUsers] = useState([]);
    const api = "http://localhost:5000";

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.get(`${api}/api/admin/users`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsers(res.data);
        } catch (err) {
            console.error('Error fetching users:', err);
        }
    };

    const handleDelete = async (userId) => {
        const userToDelete = users.find(user => user._id === userId);
        if (userToDelete && userToDelete.role === 'admin') {
            alert('You cannot delete an admin user.');
            return;
        }

        if (!confirm('Are you sure you want to delete this user?')) return;

        try {
            const token = localStorage.getItem('token');
            await axios.delete(`${api}/api/admin/users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsers(users.filter(user => user._id !== userId));
        } catch (err) {
            console.error('Error deleting user:', err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <AdminNavbar />
            <div className="admin-users-container">
                <h2>All Users</h2>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.city || '-'}</td>
                                <td>
                                    <button className="delete-btn" onClick={() => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
