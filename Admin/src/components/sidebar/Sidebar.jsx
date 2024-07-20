import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
 BarChart,
  Announcement,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
           
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Staffs
              </li>
            </Link>
            <Link to="/clients" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Clients
              </li>
            </Link>
            <Link to="/shifts" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Shifts
              </li>
            </Link>
            <Link to="/announcement" className="link">
            <li className="sidebarListItem">
              <Announcement className="sidebarIcon" />
              Announcements
            </li>
            </Link>
            <Link to="/incidences" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Incidences
            </li>
            </Link>
          </ul>
        </div>
       
        
      </div>
    </div>
  );
}
