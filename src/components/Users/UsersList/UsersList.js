import React from "react";
import PropTypes from "prop-types";

const List = ({ users }) => {
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

List.defaultProps = {
  users: [],
};

List.propTypes = {
  users: PropTypes.array,
};

export default List;
