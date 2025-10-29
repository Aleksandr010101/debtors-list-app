import { useContext, memo } from "react";
import DebtorsListContext from "../contexts/Contexts.js";

const ListItem = memo((props) => {
  const { name, debt, id, check } = props.debtor;
  const { onToggleDebtor } = useContext(DebtorsListContext);

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
            onChange={() => onToggleDebtor(id)}
          />
          Вернул
        </label>
      </form>
    </li>
  );
});

export default ListItem;
