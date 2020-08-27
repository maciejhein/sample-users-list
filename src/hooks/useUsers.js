import { useEffect, useState } from "react";
import axios from "axios";

import { GET_USERS } from "../constants";

export const useUsers = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(GET_USERS);
        setUsers(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchUsers();
  }, []);

  return { users, error };
};
