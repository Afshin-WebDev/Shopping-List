// import { useEffect, useState } from "react";
// // import { supabase } from "./utils/supabaseClient";
// import Logo from "./compo/Logo";
// import Form from "./compo/Form";
// import List from "./compo/List";
// import Footer from "./compo/Footer";

// function App() {
//   const [isEn, setIsEn] = useState(false);

//   const [allItems, setAllItems] = useState([]);
//   const [item, setItem] = useState("");
//   const [count, setCount] = useState(1);

//   // const [isLoading, setIsLoading] = useState(false);
//   const isLoading = false;

//   useEffect(() => {
//     document.documentElement.dir = isEn ? "ltr" : "rtl";
//   }, [isEn]);

//   const addvalueL = (e) => {
//     e.preventDefault();
//     if (item !== "") {
//       let ides = allItems.length + 1000;
//       setAllItems([
//         ...allItems,
//         { id: ides, item: item, count: count, packed: false },
//       ]);
//       setCount(1);
//       setItem("");
//     } else {
//       alert(isEn ? "Please write a thing" : "لطفا یه چیزی بنویسید");
//     }
//   };

//   const clearAllItems = () => {
//     let conn = window.confirm(
//       isEn
//         ? "Are you sure you want to delete all items?"
//         : "آیا از حذف تمامی موارد اطمینان دارید؟"
//     );
//     if (conn) setAllItems([]);
//   };

//   const tfi = (idd) =>
//     setAllItems((items) =>
//       items.map((i) => (i.id === idd ? { ...i, packed: !i.packed } : i))
//     );

//   return (
//     <div className="app">
//       <Logo isEn={isEn} setIsEn={setIsEn} />
//       <Form
//         isEn={isEn}
//         addvalueL={addvalueL}
//         item={item}
//         setItem={setItem}
//         count={count}
//         setCount={setCount}
//       />
//       <List
//         isLoading={isLoading}
//         isEn={isEn}
//         clearAllItems={clearAllItems}
//         tfi={tfi}
//         allItems={allItems}
//         setAllItems={setAllItems}
//       />
//       <Footer isEn={isEn} items={allItems} />
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
// اطمینان حاصل کنید که مسیر فایل supabaseClient صحیح است
import { supabase } from "./utils/supabaseClient";
import Logo from "./compo/Logo";
import Form from "./compo/Form";
import List from "./compo/List";
import Footer from "./compo/Footer";

// نام جدول شما در سوپابیس
// من فرض می‌کنم نام جدول 'items' است، اگر متفاوت است آن را تغییر دهید.
const SUPABASE_TABLE_NAME = "shoppingList";

function App() {
  const [isEn, setIsEn] = useState(false);
  const [allItems, setAllItems] = useState([]);
  const [item, setItem] = useState("");
  const [count, setCount] = useState(1);

  // state برای نمایش وضعیت لود شدن اولیه اطلاعات
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.documentElement.dir = isEn ? "ltr" : "rtl";
  }, [isEn]);

  // --- خواندن اطلاعات از سوپابیس ---
  // این useEffect فقط یک بار در زمان بالا آمدن کامپوننت اجرا می‌شود
  // و لیست آیتم‌ها را از دیتابیس شما می‌خواند
  useEffect(() => {
    async function getItems() {
      setIsLoading(true);
      // با استفاده از متد select('*') تمام ستون‌ها و ردیف‌های جدول را درخواست می‌دهیم
      const { data, error } = await supabase
        .from(SUPABASE_TABLE_NAME)
        .select("*");

      if (error) {
        console.error("خطا در خواندن اطلاعات:", error);
        alert(isEn ? "Error fetching data" : "خطا در دریافت اطلاعات");
      } else {
        // داده‌های خوانده شده را در state قرار می‌دهیم
        setAllItems(data);
      }
      setIsLoading(false);
    }

    getItems();
  }, [isEn]); // وقتی زبان تغییر می‌کند، پیام‌های خطا هم باید به روز شوند

  // --- اضافه کردن آیتم جدید به سوپابیس ---
  const addItem = async (e) => {
    e.preventDefault();
    if (item === "") {
      alert(isEn ? "Please write a thing" : "لطفا یه چیزی بنویسید");
      return;
    }

    // آبجکت آیتم جدید را مطابق با ساختار جدول در سوپابیس می‌سازیم
    // سوپابیس به صورت خودکار یک id منحصر به فرد به آن اختصاص می‌دهد
    const newItem = {
      item: item,
      count: count,
      // نام ستون در سوپابیس 'checked' است
      checked: false,
    };

    // با استفاده از متد insert آیتم جدید را به جدول اضافه می‌کنیم
    // با .select().single() آیتم اضافه شده را برمی‌گردانیم تا به لیست اضافه کنیم
    const { data: insertedItem, error } = await supabase
      .from(SUPABASE_TABLE_NAME)
      .insert([newItem])
      .select()
      .single();

    if (error) {
      console.error("خطا در اضافه کردن آیتم:", error);
      alert(isEn ? "Error adding item" : "خطا در اضافه کردن آیتم");
    } else {
      // آیتم جدید را به لیست موجود در state اضافه می‌کنیم تا UI به روز شود
      setAllItems((prevItems) => [...prevItems, insertedItem]);
      // فرم را ریست می‌کنیم
      setCount(1);
      setItem("");
    }
  };

  // --- پاک کردن تمام آیتم‌ها از سوپابیس ---
  const clearAllItems = async () => {
    const conn = window.confirm(
      isEn
        ? "Are you sure you want to delete all items?"
        : "آیا از حذف تمامی موارد اطمینان دارید؟"
    );
    if (conn) {
      // برای حذف همه موارد، یک شرط می‌گذاریم که همیشه درست باشد
      // مثلاً id مخالف یک مقدار غیرموجود باشد
      const { error } = await supabase
        .from(SUPABASE_TABLE_NAME)
        .delete()
        .neq("id", -1); // این دستور همه ردیف‌ها را حذف می‌کند

      if (error) {
        console.error("خطا در پاک کردن آیتم‌ها:", error);
        alert(isEn ? "Error clearing items" : "خطا در پاک کردن آیتم‌ها");
      } else {
        // state را خالی می‌کنیم تا لیست در UI هم پاک شود
        setAllItems([]);
      }
    }
  };

  // --- حذف یک آیتم خاص از سوپابیس ---
  const deleteItem = async (id) => {
    // با استفاده از متد delete و eq (equals) آیتم با id مشخص را حذف می‌کنیم
    const { error } = await supabase
      .from(SUPABASE_TABLE_NAME)
      .delete()
      .eq("id", id);

    if (error) {
      console.error("خطا در حذف آیتم:", error);
      alert(isEn ? "Error deleting item" : "خطا در حذف آیتم");
    } else {
      // آیتم حذف شده را از state هم فیلتر می‌کنیم
      setAllItems((items) => items.filter((i) => i.id !== id));
    }
  };

  // --- آپدیت کردن وضعیت یک آیتم در سوپابیس ---
  const toggleItemChecked = async (id) => {
    // ابتدا آیتم مورد نظر را پیدا می‌کنیم تا وضعیت فعلی آن را بدانیم
    const itemToUpdate = allItems.find((i) => i.id === id);
    if (!itemToUpdate) return;

    // با استفاده از متد update و eq، ستون 'checked' را برای آیتم مورد نظر آپدیت می‌کنیم
    const { data, error } = await supabase
      .from(SUPABASE_TABLE_NAME)
      .update({ checked: !itemToUpdate.checked })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("خطا در آپدیت آیتم:", error);
      alert(isEn ? "Error updating item" : "خطا در آپدیت آیتم");
    } else {
      // state را با مقدار جدید آپدیت می‌کنیم
      setAllItems((items) => items.map((i) => (i.id === id ? data : i)));
    }
  };

  return (
    <div className="app">
      <Logo isEn={isEn} setIsEn={setIsEn} />
      <Form
        isEn={isEn}
        // نام تابع را به addItem تغییر دادیم تا معنادارتر باشد
        addvalueL={addItem}
        item={item}
        setItem={setItem}
        count={count}
        setCount={setCount}
      />
      {/* یک پیام لودینگ برای تجربه کاربری بهتر نمایش می‌دهیم */}

      <List
        isLoading={isLoading}
        isEn={isEn}
        clearAllItems={clearAllItems}
        tfi={toggleItemChecked}
        allItems={allItems}
        deleteItem={deleteItem}
      />

      <Footer isEn={isEn} items={allItems} />
    </div>
  );
}

export default App;
