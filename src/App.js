import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import "./App.css";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
        const [message, setMessage]=useState([]);
        useEffect(()=>{
          fetch("/ElderLinker")
              .then((res)=>{
                return res.json();
              })
              .then((data)=>{
                  setMessage(data);
              });
        },[]);
    return (
        <Provider store={store}>
            <GlobalStyle />
            <div className="App">{Routes()}</div>
        </Provider>
    );
}

export default App;
