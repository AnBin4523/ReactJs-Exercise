import React from "react";
import SeatList from "./SeatList";
import Tickets from "./Tickets";
import data from "./data.json";

export default function MovieTicket() {
  return (
    <div className="bg-dark">
      <div className="container p-3">
        <h1 className="text-center text-warning mb-5 p-3">BOOKING MOVIE</h1>
        <div className="row">
          <div className="col-7">
            <SeatList rows={data} />
          </div>
          <div className="col-5">
            <Tickets />
          </div>
        </div>
      </div>
    </div>
  );
}
