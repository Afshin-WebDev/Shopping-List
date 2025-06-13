/* eslint-disable react/prop-types */
import { useState } from "react";
import Lii from "./Lii";

export default function List({
  allItems,
  setAllItems,
  tfi,
  clearAllItems,
  isEn,
  isLoading = false,
  deleteItem,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = allItems;
  if (sortBy === "description")
    sortedItems = allItems.slice().sort((a, b) => a.des.localeCompare(b.des));
  if (sortBy === "packed")
    sortedItems = allItems.slice().sort((a, b) => +a.packed - +b.packed);

  return (
    <div className="list">
      {!isLoading ? (
        <>
          <ul>
            {sortedItems.map((n) => {
              return (
                <Lii
                  deleteItem={deleteItem}
                  isEn={isEn}
                  setAllItems={setAllItems}
                  item={n}
                  tfi={tfi}
                  key={n.id}
                />
              );
            })}
          </ul>
          {allItems.length > 0 ? (
            <div className="actions">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="input">
                  {isEn ? "Sort by input order" : "مرتب کردن به ترتیب ورودی"}
                </option>
                <option value="description">
                  {isEn ? "Sort by description" : "مرتب کردن به ترتیب الفبا"}
                </option>
                <option value="packed">
                  {" "}
                  {isEn
                    ? "Sort by packed status"
                    : "مرتب کردن با وضعیت انجام شده"}
                </option>
              </select>
              <button onClick={() => clearAllItems()}>
                {isEn ? "Clear All" : "حذف همه"}
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <p className="loading-message">
          {isEn ? "Loading items..." : "در حال بارگذاری لیست..."}
        </p>
      )}
    </div>
  );
}
