import ListGroup from "./components/ListGroup";
function App() {
   let cities = ["New York", "Tokyo", "Kathmandu", "Sydney", "Melbourne"];
  const  handleSelectItem = (item:string)=>{
    console.log({item})
  }
  return (
    <div>
      <ListGroup  items = {cities} heading = 'List of Cities' onSelectItem={handleSelectItem}/>
    </div>
  );
}
export default App;
