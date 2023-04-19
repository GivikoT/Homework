/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ users }) => {
  const [displayedItems, setDisplayedItems] = useState(5);

  return (
    <div className="container">
      <div className="cards-container">
        {users.slice(0, displayedItems).map((user) => (
          <Card key={user.userID} item={user} />
        ))}
      </div>
      {displayedItems < users.length && (
        <button
          className="more"
          onClick={() => setDisplayedItems(users.length)}
        >
          Show all ({users.length})
        </button>
      )}
      {displayedItems > 5 && (
        <button className="less" onClick={() => setDisplayedItems(5)}>
          Show less
        </button>
      )}
    </div>
  );
};

export default Cards;
