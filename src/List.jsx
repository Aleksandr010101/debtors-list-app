import _ from "lodash";
import { uniqueId } from "lodash";

const List = (props) => {
  const { debtors } = props;
  const render = (debtors) => {
    return debtors.map(({ name, debt }) => {
      return (
        <li key={uniqueId()}>
          <label>{name}</label>
          <bn />
          <label>{debt}</label>
        </li>
      );
    });
  };
  return (
    <form>
      <ul>{render(debtors)}</ul>
    </form>
  );
};
export default List;
