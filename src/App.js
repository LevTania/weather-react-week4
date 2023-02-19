import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <body>
          <div class="container + border">
            <h1 id class="border2">
              The forecast for the next 7 days
            </h1>
            <div class="container text-center">
              <div class="row align-items-start">
                <div class="col">
                  <h2 id="city">Kyiv</h2>
                </div>
                <div class="col">
                  <div class="iconTop">
                    <img
                      src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                      alt="Cloudy"
                      id="icon"
                      class="float-left"
                      width="80"
                    />
                  </div>
                  <div class="col">
                    <h2 id="time">-</h2>
                    <span class="temperature" id="temperature">
                      19
                    </span>
                    <span class="unit">
                      <a
                        href="https://github.com/LevTania/weather-react-week4"
                        id="celsius-link"
                      >
                        °C
                      </a>{" "}
                      |{" "}
                      <a
                        href="https://github.com/LevTania/weather-react-week4"
                        id="fahrenheit-link"
                      >
                        °F
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col">
                <form id="search-form">
                  <div class="col-6">
                    <input
                      type="search"
                      placeholder="Type a city for the forecast..."
                      autofocus="on"
                      autocomplete="off"
                      id="city-input"
                      class="form-control shadow-sm"
                    />
                  </div>
                  <div class="col-3">
                    <input
                      type="submit"
                      value="Search"
                      class="form-control btn btn-primary shadow-sm w-100"
                    />
                  </div>
                  <div class="days" id="forecast"></div>
                  <div class="coded">
                    <a
                      href="https://github.com/LevTania/SheCodes_Plus_GitHub_Homework"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open-source code
                    </a>{" "}
                    by{" "}
                    <a
                      href="https://www.linkedin.com/in/tetiana-levandovska-339181239/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tetiana Levandovska
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <script src="index.js"></script>
        </body>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
