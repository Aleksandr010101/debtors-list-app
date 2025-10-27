import ListItem from "./ListItem.jsx";

const List = (props) => {
  const { debtors, onToggle } = props;

  const render = (debtors) => {
    return debtors.map((debtor) => {
      return <ListItem key={debtor.id} debtor={debtor} onToggle={onToggle} />;
    });
  };
  return <ul>{render(debtors)}</ul>;
};

export default List;
