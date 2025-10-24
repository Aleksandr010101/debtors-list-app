import { useState } from "react";
import { uniqueId } from "lodash";

const FormAddDebtors = (props) => {
  const [name, setName] = useState("");
  const [debt, setDebt] = useState("");
  const { debtors, setDebtors } = props;

  const debtorsSubmit = (e, debtors, name, debt) => {
    e.preventDefault();
    const resultD = [{ name, debt, id: uniqueId(), chek: false }, ...debtors];
    setDebtors(resultD);
    setName("");
    setDebt("");
    return;
  };

  return (
    <form onSubmit={(e) => debtorsSubmit(e, debtors, name, debt)}>
      <label htmlFor="name">ФИО</label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="debt">Задолженность</label>
      <input
        id="debt"
        type="text"
        name="debt"
        value={debt}
        onChange={(e) => setDebt(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FormAddDebtors;
