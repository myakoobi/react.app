import { useState } from "react";

interface Props {
  items: String[];
  headings: String;
  onSelectItem: (item: String) => void;
}

function ListGroup({ items, headings, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  /*
  if (items.length === 0) {
    return (
      <>
        <h1>
          List<p>no item found</p>
        </h1>
      </>
    );
    const message = () => {
        return whatever
    }
    **/

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
        ;
      </ul>
    </>
  );
}
export default ListGroup;
