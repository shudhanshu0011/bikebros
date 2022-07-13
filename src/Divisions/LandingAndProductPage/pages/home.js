import React from "react";
import { Mainsearch } from "../components/mainsearch/mainsearch";
import { Reviewwall } from "../components/reviewwall/reviewwall";
import { Scrollinformation } from "../components/scrollinformation/scrollinformation";

function Home() {
  return (
    <div>
      <div>
        <div>
          <div className="welcomewall">
            <Mainsearch />
          </div>
          <div>
            <Reviewwall />
          </div>
          <div>
            <Scrollinformation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
