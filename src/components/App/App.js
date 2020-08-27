import React from "react";

import { useUsers } from "../../hooks";
import Users from "../Users";

const App = () => {
  const { users, error } = useUsers();

  const renderAppContent = () => {
    if (!users && !error) {
      return <div>Loading...</div>;
    }

    if (error) {
      throw error;
    }

    return <Users users={users} />;
  };

  return <main className="main-container">{renderAppContent()}</main>;
};

export default App;
