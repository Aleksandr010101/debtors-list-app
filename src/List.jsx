import React, { useState } from "react";
import _ from "lodash";
import { uniqueId } from "lodash";
import ListItem from "./ListItem.jsx";

const List = (props) => {
  const { debtors } = props;

  const render = (debtors) => {
    return debtors.map((debtor) => {
      return <ListItem key={debtor.id} debtor={debtor} />;
    });
  };
  return <ul>{render(debtors)}</ul>;
};

export default List;
