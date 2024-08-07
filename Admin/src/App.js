import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Shiftlist from "./pages/shiftlist/Shiftlist";
import Shift from "./pages/shift/Shift";
import NewShift from "./pages/newShift/NewShift";
import Login from "./pages/login/Login";
import ClientList from "./pages/clientList/ClientList";
import Client from "./pages/client/Client";
import NewClient from "./pages/newClient/newClient";
import Announcement from "./pages/announcement/Announcement";
import IncidentList from "./pages/incidenceList/IncidentList";
import Incident from "./pages/incident/Incident";
function App() {
  const user = JSON.parse(localStorage.getItem("staff"));

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />

              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>

              <Route path="/clients">
                <ClientList />
              </Route>

              <Route path="/user/:userId">
                <User />
              </Route>

              <Route path="/client/:clientId">
                <Client />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/newClient">
                <NewClient />
              </Route>
              <Route path="/shifts">
                <Shiftlist />
              </Route>
              <Route path="/shift/:shiftId">
                <Shift />
              </Route>
              <Route path="/newshift">
                <NewShift />
              </Route>
              <Route path="/announcement">
                <Announcement />
              </Route>
              <Route path="/incidences">
                <IncidentList />
              </Route>
              <Route path="/incidence/:id">
                <Incident />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
