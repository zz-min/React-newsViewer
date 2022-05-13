import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const clickHandler = () => {
    //axios.get(url[, config])
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=5c9b8aa35f974b72a1d0c66118f2ce54"
      )
      .then((response) => {
        console.log(response);
        setData(response.data.articles);
      });
  };
  return (
    <div className="App">
      <div>
        <button onClick={clickHandler}>불러오기</button>
      </div>
      {data && ( //data가 존재하면 출력하라 true면 뒤에것도 검사, false면 이후검사도 중지
        <textarea rows={40} value={JSON.stringify(data)} readOnly={true} />
      )}
    </div>
  );
}

export default App;
