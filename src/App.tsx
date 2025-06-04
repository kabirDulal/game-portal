import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
function App() {
  let cities = ["New York", "Tokyo", "Kathmandu", "Sydney", "Melbourne"];
  const handleSelectItem = (item: string) => {
    console.log({ item })
  }
  return (
    <>
      <div className="mb-3">
        <ListGroup
          items={cities}
          heading="List of Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div className="alert alert-primary">
        <Alert>
          Hello <span>World </span>
        </Alert>
      </div>
      <button
        className="btn btn-primary"
        children="Click Me"
        onClick={() => {          
        }}
      />
    </>
  );
}
export default App;
