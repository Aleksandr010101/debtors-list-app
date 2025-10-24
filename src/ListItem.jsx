import React, { useState } from "react";

const ListItem = (props) => {
  const { name, debt, chek } = props.debtor;
  const [itemChek, setItemChek] = useState(chek);

  return (
    <li>
      <div>{name}</div>
      <div>{`${debt}Р`}</div>
      <form />
      <label>
        <input
          name={name}
          type="checkbox"
          checked={itemChek}
          onChange={() => setItemChek(!itemChek)}
        />
        Вернул
      </label>
    </li>
  );
};

export default ListItem;
