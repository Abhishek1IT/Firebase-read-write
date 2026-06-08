import { useEffect, useState, useCallback } from "react";
import { db } from "./firebase";
import "./App.css";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const usersCollection = collection(db, "users");

  // Create User
  const addUser = async () => {
    if (!name) return;

    await addDoc(usersCollection, {
      name: name,
    });

    setName("");
    fetchUsers();
  };

  // Read Users
  const fetchUsers = useCallback(async () => {
    const data = await getDocs(usersCollection);

    const userList = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setUsers(userList);
  }, [usersCollection]);

  // Update User
  const updateUser = async (id, currentName) => {
    const newName = prompt("Enter new name", currentName);

    if (!newName) return;

    const userDoc = doc(db, "users", id);

    await updateDoc(userDoc, {
      name: newName,
    });

    fetchUsers();
  };

  // Delete User
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);

    await deleteDoc(userDoc);

    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="container">
      <h1>Firebase CRUD App</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={addUser}>Add User</button>
      </div>

      <div className="users">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>

            <button
              className="update-btn"
              onClick={() => updateUser(user.id, user.name)}
            >
              Update
            </button>

            <button className="delete-btn" onClick={() => deleteUser(user.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
