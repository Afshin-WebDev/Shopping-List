/* eslint-disable react/prop-types */
import { convertNumbers } from "../utils/numbers";

export default function Form({
  isEn,
  item,
  setItem,
  inputVN,
  setCount,
  addvalueL,
}) {
  return (
    <form className="add-form" onSubmit={addvalueL}>
      <h3>{isEn ? "What do you need" : "چه چیزی نیاز دارید"}</h3>

      <select value={inputVN} onChange={(e) => setCount(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
          <option value={n} key={n}>
            {isEn ? n : convertNumbers(n, false)}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder={isEn ? "item..." : "مورد..."}
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button>{isEn ? "ADD" : "افزودن"}</button>
    </form>
  );
}
