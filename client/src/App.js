import axios from "axios";
import { useState } from "react";
function App() {
  const [url, setUrl] = useState("")
  const getInfo = async () => {
    const response = await axios.post("http://localhost:4000/api/v1/getInfo", {
      "url": url
    })
    console.log(response)
  }
  return (
    <div >
      <h1>get information for a youtube video </h1>
      <input placeholder="enter url here" onChange={(e) => setUrl(e.target.value)} />
      <button onClick={() => getInfo()}>getInfo</button>
    </div>
  );
}

export default App;
