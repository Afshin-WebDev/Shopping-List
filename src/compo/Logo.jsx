/* eslint-disable react/prop-types */
export default function Logo({ isEn, setIsEn }) {
  return (
    <h1
      style={
        !isEn
          ? { fontFamily: "Fedra", letterSpacing: "0", wordSpacing: "1px", fontSize: "5rem",   padding: '4.1rem 0'}
          : null
      }
    >
      {isEn ? "Shop List" : "لیست خریدها"}
      <button style={
        !isEn
          ? { marginLeft: "0", marginRight: '10px'}
          : null
      } onClick={() => setIsEn(!isEn)}>
        <i className="fa-solid fa-globe" />
      </button>
    </h1>
  );
}
