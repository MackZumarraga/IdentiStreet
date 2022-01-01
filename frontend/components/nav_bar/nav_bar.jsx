import React from 'react';

export default () => (
  <div>
    <div>Menu options including navlinks to rent, buy, sell, buildings, resources, blog</div>
    <div>SearchBar component for address, buildings, agent
      <form>
        <input type="text" placeholder='e.g. address, building, agent'></input>
        <button>O</button>
      </form>
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
