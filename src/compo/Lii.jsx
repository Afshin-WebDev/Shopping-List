/* eslint-disable react/prop-types */
import { convertNumbers } from "../utils/numbers";

export default function Lii({ item, tfi, deleteItem, isEn }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => tfi(item.id)}
      />
      <span className={item.packed ? "midline" : null}>
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
