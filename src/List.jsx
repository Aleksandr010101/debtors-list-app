import ListItem from "./ListItem.jsx";

const List = (props) => {
  const { debtors, toggle } = props;

  const render = (debtors) => {
    return debtors.map((debtor) => {
      return <ListItem key={debtor.id} debtor={debtor} onToggle={toggle} />;
    });
  };
  return <ul>{render(debtors)}</ul>;
};

export default List;
