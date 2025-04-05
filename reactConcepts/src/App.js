import logo from "./logo.svg";
import "./App.css";
import ClassCom from "./Components/ClassCom";
import FunctionalCom from "./Components/FuncationalCom";
import LifeCycle from "./Components/LifeCycle";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://pixabay.com/api/?key=17116025-59af6bf08512e84d50c227107&q=yellow+flowers&image_type=photo&pretty=true"
      )
      .then((res) => {
        console.log(res.data);
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // componetdimount
  return (
    <div>
      <h1>Welcome to the React JS Session</h1>
      <p>Class components</p>
      <p>Functional components</p>
      <p>State & Props</p>
      <p>LifeCycle methods</p>
      <p>API Integration</p>

      {/* <ClassCom />
      <FunctionalCom /> */}
      {/* <LifeCycle /> */}
      <h1>Total Hits - {apiData?.totalHits}</h1>
      {apiData?.hits.map((item) => (
        <img src={item.previewURL} width={300} height={300} alt="flower" />
      ))}
    </div>
  );
}

export default App;
