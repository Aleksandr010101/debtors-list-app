// import _ from 'lodash';
// import { uniqueId } from 'lodash';

const List = () => {
  return (
    <form>
      <ul>
        <li>
          <label>Поле 1:</label>
          <input type="text" name="field1" />
        </li>
        <li>
          <label>Поле 2:</label>
          <input type="text" name="field2" />
        </li>
        <li>
          <label>Поле 3:</label>
          <input type="text" name="field3" />
        </li>
      </ul>
    </form>
  );
};
export default List;
