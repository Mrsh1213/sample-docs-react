import React, {useContext} from 'react';
import './App.css';
import {AppContext} from "./Context/AppContext";

function App() {
  const [data, dispatch] = useContext(AppContext);
  return (

      <div className="App">
        <table>
          <thead>
          <tr>
            <th>شناسه</th>
            <th>نام</th>
            <th>وضعیت</th>
            <th>online</th>
            <th>offline</th>
          </tr>
          </thead>
          <tbody>
          {data.users.map(user => <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.status ? "online" : "offline"}</td>
            <td>
              <button onClick={() => dispatch({type: "CHANGE_STATUS_USERS", id: user.id, status: true})}>set online
              </button>
            </td>
            <td>
              <button onClick={() => dispatch({type: "CHANGE_STATUS_USERS", id: user.id, status: false})}>set offline
              </button>
            </td>
          </tr>)}
          </tbody>
        </table>
      </div>
  );
}

export default App;
