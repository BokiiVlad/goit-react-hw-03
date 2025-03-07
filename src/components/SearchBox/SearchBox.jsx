import css from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div>
      <p className={css.searchText}>Find contacts by name</p>
      <input type="search" className={css.findField} />
    </div>
  );
}
