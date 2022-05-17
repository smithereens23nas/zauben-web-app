import React from "react";
import "./MetricsListPage.css";
import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa";
import { MdOutlineCompress } from "react-icons/md";
import { BsMoisture } from "react-icons/bs";
import { FaWater } from "react-icons/fa";

const Metrics_List_Menu = () => {
  return (
    <body className="metrics-grid">
      <div className="container-progress-cards">
        <div class="progress-card">
          <div class="box">
            <div className="percent">
              <svg className="metric-svg">
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="72" cy="72" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  86<span>%</span>
                </h2>

                <FiWind className="icon-style" />
              </div>
            </div>
            <div>
              <h2><a className="text" href="/performance">Indoor Air Quality</a></h2>
            </div>
          </div>
          <p className="para-description">
            Indoor air quality within and around buildings and structures. IAQ
            is known to affect the health, confort, and well-being of building
            occupants.
          </p>
        </div>
        <div class="progress-card">
          <div class="box">
            <div className="percent">
              <svg className="metric-svg">
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="72" cy="72" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  74<span>%</span>
                </h2>
                <BsMoisture className="icon-style" />
              </div>
            </div>
            <div>
            <h2><a className="text" href="/performance">Moisture</a></h2>
            </div>
          </div>
            <p className="para-description">Moisture in the plants.</p>
        </div>
        <div class="progress-card">
          <div class="box">
            <div className="percent">
              <svg className="metric-svg">
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="72" cy="72" r="70"></circle>
              </svg>
              <div className="number number-spacing">
                <h2>
                  80<span>%</span>
                </h2>
                <FaTemperatureLow className="icon-style" />
              </div>
            </div>
            <h2><a className="text" href="/performance">Temperature</a></h2>
          </div>
          <p className="para-description">The temperature of the plant.</p>
        </div>
        <div class="progress-card">
          <div class="box">
            <div className="percent">
              <svg className="metric-svg">
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="72" cy="72" r="70"></circle>
              </svg>
              <div className="number number-spacing">
                <h2>
                  77<span>%</span>
                </h2>
                <MdOutlineCompress className="icon-style" />
              </div>
            </div>
            <h2><a className="text" href="/performance">Pressure</a></h2>
          </div>
          <p className="para-description">The pressure of the plant.</p>

        </div>
        <div class="progress-card">
          <div class="box">
            <div className="percent">
              <svg className="metric-svg">
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="72" cy="72" r="70"></circle>
              </svg>
              <div className="number number-spacing">
                <h2>
                  81<span>%</span>
                </h2>
                <WiHumidity className="icon-style" />
              </div>
            </div>
            <h2><a className="text" href="/performance">Humidity</a></h2>
          </div>
          <p className="para-description">The humidity of the plant.</p>

        </div>
        <div class="progress-card">
          <div class="box">
            <div className="percent">
              <svg className="metric-svg">
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="72" cy="72" r="70"></circle>
              </svg>
              <div className="number number-spacing">
                <h2>
                  72<span>%</span>
                </h2>
                <FaWater className="icon-style" />
              </div>
            </div>
            <h2><a className="text" href="/performance">Water Tank</a></h2>
          </div>
          <p className="para-description">The water tank of the plant.</p>

        </div>
      </div>
    </body>
  );
};

export default Metrics_List_Menu;
