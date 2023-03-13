import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Filter from "./components/Filter/Filter";
import ResetButton from "./components/ResetButton/ResetButton";
import UserList from "./components/UserList/UserList";
import UserModal from "./components/UserModal/UserModal";

function App() {
  return (
      <Provider store={store}>
        <div className="container">
          <h1>User List</h1>
          <Filter />
          <ResetButton />
          <UserList />
        </div>
      </Provider>
  );
}

export default App;
