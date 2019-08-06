import React from "react";
const uniqid = require("uniqid");

class App extends React.Component {
  render() {
    return (
      <div className="small-container">
        <Header />
        <DestinationSelector />
        <CheckInOutDateRow />
        <GuestCountRow />
        <button className="button full-button" type="submit">
          Submit
        </button>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Find Places to Stay in the United States with Airbnb</h1>
        <h5>Discover entire homes or private rooms perfect for any trip.</h5>
      </div>
    );
  }
}

class DestinationSelector extends React.Component {
  render() {
    return (
      <form>
        <label>
          Choose a browser from this list:
          <input list="destinations" name="myBrowser" type='text' placeholder='Anywhere' />
        </label>
        <datalist id="destinations">
          <option value="Atlanta" />
          <option value="Baltimore" />
          <option value="Chicago" />
          <option value="Detroit" />
          <option value="Madison" />
          <option value="San Francisco" />
        </datalist>

        {/* Choose a browser from this list: */}
        {/* <input list="browsers" name="myBrowser" />   */}
      </form>
    );
  }
}

class CheckInOutDateRow extends React.Component {
  render() {
    return (
      <form className="flex-row">
        <div className="flex-large">
          <label>Check-in</label>
          <input type="date" placeholder="mm/dd/yy" />
        </div>
        <div className="flex-large">
          <label>CheckOut</label>
          <input type="date" placeholder="mm/dd/yy" />
        </div>
      </form>
    );
  }
}

class GuestCountRow extends React.Component {
  render() {
    let options = (guestType, limit) => {
      let optionsArr = [];
      for (let i = 2; i < limit + 1; i++) {
        optionsArr.push(<option key={uniqid()}>{i + " " + guestType}</option>);
      }
      return optionsArr;
    };

    return (
      <form className="flex-row">
        <div className="flex-large">
          <label>Adults</label>
          <select>
            <option key={uniqid()}>1 Adult</option>
            {options("Adults", 16)}
          </select>
        </div>
        <div className="flex-large">
          <label>Children</label>
          <select>
            <option key={uniqid()}>0 Children</option>
            <option key={uniqid()}>1 Child</option>
            {options("Children", 5)}
          </select>
        </div>
      </form>
    );
  }
}

export default App;
