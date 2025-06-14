/* eslint-disable react/prop-types */
import { convertNumbers } from "../utils/numbers";

export default function Lii({ item, tfi, deleteItem, isEn }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => tfi(item.id)}
      />
      <span className={item.checked ? "midline" : null}>
        {isEn
          ? item.count + " \t " + item.item
          : convertNumbers(item.count + " " + item.item, false)}
      </span>
      <button onClick={() => deleteItem(item.id)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </li>
  );
}
