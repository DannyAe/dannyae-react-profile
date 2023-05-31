import React from 'react';

import cliff from "../../assets/images/cliff.png";
import date from "../../assets/images/date.png";
import fav from "../../assets/images/fav.png";

function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">

        <div class="col">
          <div class="card">
            <img
              src={cliff}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/dannyae" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/dannyae" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={date}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/dannyae" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/dannyae" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={fav}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/dannyae" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/dannyae" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>


  );
}

export default Portfolio;
