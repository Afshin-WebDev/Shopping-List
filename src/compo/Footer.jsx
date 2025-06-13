/* eslint-disable react/prop-types */
import { convertNumbers } from "../utils/numbers";

export default function Footer({ items, isEn }) {
  const allItems = items.length;
  const choesedItems = items.filter((item) => item.checked === true).length;
  const darsad = Math.round((choesedItems / allItems) * 100);

  return (
    <footer className="stats">
      <em>
        {isEn
          ? darsad === 100
            ? "You got everything! Ready to go 🚶‍♂️"
            : allItems === 0
            ? `Write down what you want 🚀`
            : ` 💼 You have ${allItems} ${
                allItems === 1 ? "item" : "items"
              }, and you already packed ${choesedItems} (${darsad}%)`
          : darsad === 100
          ? "شما همه چیز را برداشته اید و آماده رفتن هستید 🚶‍♂️"
          : allItems === 0
          ? `موارد مدنظرتان را بنویسید 🚀`
          : ` 💼 شما ${convertNumbers(
              allItems,
              false
            )} مورد دارید و فقط ${convertNumbers(
              choesedItems,
              false
            )} مورد را برداشته اید(${convertNumbers(darsad, false)}%)`}
      </em>
    </footer>
  );
}
