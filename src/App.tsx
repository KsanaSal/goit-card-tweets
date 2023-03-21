import React from "react";
import "./App.css";
import users from "./components/data/data.json";
import CardList from "./components/cardList/CardList";

function App() {
    return (
        <div>
            <CardList cardList={users.users} />
        </div>
    );
}

export default App;
