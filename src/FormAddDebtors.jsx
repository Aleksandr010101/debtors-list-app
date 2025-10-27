import { useState } from "react";

const FormAddDebtors = (props) => {
  const [name, setName] = useState("");
  const [debt, setDebt] = useState("");
  const { handleSetDebtor } = props;

  const handleSubmit = (e, name, debt) => {
    e.preventDefault();

    const nameTrim = name.trim();
    if (!nameTrim) {
      alert("Введите ФИО должника");
      return;
    }

    const debtAmount = parseFloat(debt);
    if (isNaN(debtAmount) || debtAmount <= 0) {
      alert("Введите корректную сумму долга");
      return;
    }

    handleSetDebtor(nameTrim, debtAmount);
    setName("");
    setDebt("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, name, debt)}>
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
