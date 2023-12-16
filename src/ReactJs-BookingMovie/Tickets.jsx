import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Tickets() {
  const selectedSeats = useSelector((state) => {
    return state.movieTicket.selectedSeats;
  });

  const dispatch = useDispatch();

  const totalPrice = selectedSeats.reduce(
    (total, seat) => total + seat.price,
    0
  );

  const handleRemove = (seat) => {
    dispatch({
      type: "movieTicket/RemoveSeat",
      payload: seat,
    });
  };

  return (
    <div className="bg-dark">
      <h3 className="text-center text-light">List of seats you chosen</h3>

      <div>
        <button className="btn btn-danger m-2 p-3"></button>
        <span className="text-light">Seat booked</span>
      </div>

      <div>
        <button className="btn btn-success m-2 p-3"></button>
        <span className="text-light">Seat booking</span>
      </div>

      <div>
        <button className="btn btn-light m-2 p-3"></button>
        <span className="text-light">Not booking</span>
      </div>

      <table className="table table-dark ">
        <thead>
          <tr>
            <th className="text-light">Seat number</th>
            <th className="text-light">Price</th>
            <th className="text-light">Remove</th>
          </tr>
        </thead>
        <tbody>
          {selectedSeats.map((item) => (
            <tr key={item.name}>
              <td className="text-warning">{item.name}</td>
              <td className="text-warning">{item.price}$</td>
              <td>
                <button
                  className="btn btn-danger bg-danger"
                  onClick={() => handleRemove(item)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="text-light">Total price</td>
            <td className="text-warning">{totalPrice}$</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
