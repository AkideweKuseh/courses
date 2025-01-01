/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
function List(props) {
  const itemList = props.items;
  const category = props.category;
  const listItems = itemList.map((item, index) => (
    <li key={index + 1}>
      {item.name}: &nbsp;
      <em>{item.calories}</em>
    </li>
  ));

  return (
    <>
      <h2 className="list-category">{category}</h2>
      {itemList.length > 0 ? (
        <ul className="list-items">{listItems}</ul>
      ) : (
        <h3 className="no-items">
          No items available under {category === "Not Set" ? "this " : category}
          categogy
        </h3>
      )}
    </>
  );
}

List.PropTypes = {
  items: PropTypes.array,
  category: PropTypes.string,
};

List.defaultProps = {
  items: [],
  category: "Not Set",
};

export default List;
