import { memo } from "react";

const ListItem = memo((props) => {
  const { name, debt, id, chek } = props.debtor;
  const { onToggle } = props;

  return (
    <li>
      <div>{name}</div>
      <div>{`${debt}Р`}</div>
      <form />
      <label>
        <input
          name={name}
          type="checkbox"
          checked={chek}
          onChange={() => onToggle(id)}
        />
        Вернул
      </label>
    </li>
  );
});

export default ListItem;
