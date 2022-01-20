import { NavLink, Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <nav>

        <NavLink to="/AddRestaurant" >Add Restaurant</NavLink>  |{" "}
        <NavLink to="/ListRestaurants" >List Restaurants</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
