import React from "react";
import SeatItem from "./SeatItem";
import { useSelector } from "react-redux";

export default function SeatList({ rows }) {
  const selectedStates = useSelector((state) => {
    return state.movieTicket.selectedSeats;
  });

  return (
    <div>
      <h5 className="text-center text-white">SCREEN</h5>
      <div className="row">
        <div className="col-12 bg-warning p-5 mb-4 "></div>
        {rows.map((row) => (
          <div key={row.row} className="row">
            <p className="text-white">{row.row}</p>
            {row.seats.map((seat) => {
              const found = selectedStates.find(
                (item) => item.name === seat.name
              );

              return (
                <div key={seat.name} className="col-1">
                  {/* 2 !! ep kieu ve boolean */}
                  <SeatItem seat={seat} isSelected={!!found} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
