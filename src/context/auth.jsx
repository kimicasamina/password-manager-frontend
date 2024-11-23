import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!user) {
        try {
          const { data } = await axios.get("/api/auth/");
          console.log("AUTH USER DATA: ", data);
          if (data) {
            setUser(data.user);
          }
          setIsFetching(false);
        } catch (err) {
          console.log(err);
          setError(err.message);
        } finally {
          setIsFetching(false);
        }
      }
    }

    fetchData();
  }, []);

  return (
    <authContext.Provider value={{ user, setUser, isFetching, setIsFetching }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};
