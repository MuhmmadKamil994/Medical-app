
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]); 
  const [currentUser, setCurrentUser] = useState(null); 

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);

    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(storedUser);
  }, []);

  const registerUser = (fullName, email, password, role) => {
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      throw new Error("User already exists!");
    }

    const newUser = { fullName, email, password, role };
    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    return newUser;
  };

  const loginUser = (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
      throw new Error("Invalid email or password!");
    }

    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, registerUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
