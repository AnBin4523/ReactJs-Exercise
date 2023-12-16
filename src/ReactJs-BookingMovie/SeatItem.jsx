import React from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";

export default function SeatItem({ seat, isSelected }) {
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch({
      type: "movieTicket/SelectedSeat",
      payload: { ...seat, isSelected: !isSelected },
    });
  };

  return (
    <button
      className={cn("btn m-1 text-dark", {
        "btn-danger": seat.booked,
        "btn-success": isSelected,
        "btn-light": !seat.booked && !isSelected,
      })}
      disabled={seat.booked}
      onClick={handleSelect}
    >
      {seat.name}
    </button>
  );
}
