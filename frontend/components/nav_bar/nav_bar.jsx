import React from 'react';
import NavBarOptions from "./nav_bar_options"
import NavBarSearch from "./nav_bar_search"

export default () => (
  <div>
    <div className="nav-menu-container">
      <NavBarOptions/>
      <NavBarSearch/>
    </div>


    <div>FilterBox component
      <form>
        <label>LOCATION
          <input type="text" placeholder='Manhattan'></input>
        </label>
        <label>MINIMUM PRICE
          <input type="text" placeholder='Any'></input>
        </label>
        <label>MAXIMUM PRICE
          <input type="text" placeholder='Any'></input>
        </label>
        <label>BEDROOMS
          <input type="text" placeholder='Studio 1 2 3 4+'></input>
        </label>
        <button>SEARCH</button>
      </form>
    </div>
  </div>
)
