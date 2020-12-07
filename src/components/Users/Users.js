import React, { useState } from "react";
import PropTypes from "prop-types";

import UsersList from "./UsersList";

const Users = ({ users }) => {
  const [currentUsers, setCurrentUsers] = useState(users.slice(0, 3));

  const handleOnChange = ({ target }) => {
    const searchedUsers = users
      .filter(({ name }) =>
        name.toLowerCase().includes(target.value.toLowerCase())
      )
      .slice(0, 3);

    setCurrentUsers(searchedUsers);
  };
  // TODO Replace input to controled component
  return (
    <section className="users">
      <h1 className="users__header">User List</h1>
      <input
        data-testid="users-input"
        className="users__input"
        type="text"
        placeholder="Search by user name..."
        onChange={handleOnChange}
      />
      <UsersList users={currentUsers} />
    </section>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
