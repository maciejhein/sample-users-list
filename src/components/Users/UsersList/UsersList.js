import React from "react";
import PropTypes from "prop-types";

const UsersList = ({ users }) => {
  return (
    <ul className="users-list">
      {users.map(({ id, name, username }, index) => (
        <li className="users-list__item" key={id}>
          <span className="users-list__item-part">{index + 1}.</span>
          <span>{name}</span>
          <span className="users-list__item-part">@{username}</span>
        </li>
      ))}
    </ul>
  );
};

UsersList.defaultProps = {
  users: [],
};

UsersList.propTypes = {
  users: PropTypes.array,
};

export default UsersList;
