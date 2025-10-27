import { memo } from "react";

const ListItem = memo((props) => {
  const { name, debt, id, check } = props.debtor;
  const { onToggle } = props;

  return (
    <li>
      <div>{name}</div>
      <div>{debt} ₽</div>
      <form>
        <label>
          <input
            name={name}
            type="checkbox"
            checked={check}
            onChange={() => onToggle(id)}
            style={{ margin: 0 }}
          />
          Вернул
        </label>
      </form>
    </li>
  );
});

export default ListItem;
