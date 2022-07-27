import ReactDOM from "react-dom";
import EventComponent from "./Events/EventComponent";

const App = () => {
  return (
    <div>
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
