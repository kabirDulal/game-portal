import {useState} from "react";

function ListGroup() {
  let cities = ["New York", "Tokyo", "Kathmandu", "Sydney", "Melbourne"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List Items</h1>
      {cities.length === 0 ? (
        <p>No Cities Found</p>
      ) : (
        <ul className="list-group">
          {cities.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default ListGroup;
