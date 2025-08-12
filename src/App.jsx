import { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleFormSubmitData = (formData) => {
    if (editingIndex !== null) {
      setUsers((prev) =>
        prev.map((u, i) => (i === editingIndex ? formData : u))
      );
      setEditingIndex(null);
    } else {
      setUsers((prev) => [...prev, formData]);
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      setUsers((prev) => prev.filter((_, index) => index !== id));
    }
  };

  // Sort alphabetically
  const sortedUsers = [...users].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center py-10">
      <div className="container mx-auto p-4 bg-white shadow-lg rounded-xl">
        <Cards
          handleRemove={handleRemove}
          handleEdit={handleEdit}
          users={sortedUsers}
        />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default App;
