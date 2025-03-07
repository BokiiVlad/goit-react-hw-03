import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        onChange={(ev) => {
          onFilter(ev.target.value);
        }}
        value={value}
        className={css.findField}
      />
    </div>
  );
}
