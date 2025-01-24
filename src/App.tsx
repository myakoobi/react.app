import ListGroup from "./componnents/ListGroup";

function App() {
  let items = ["new york", "tokyo", "paris", "berlin", "Washington"];
  const eventHandler = (item: String) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        headings={"cities"}
        onSelectItem={eventHandler}
      />
    </div>
  );
}
export default App;
