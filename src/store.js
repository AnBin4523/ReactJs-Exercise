import { configureStore } from "@reduxjs/toolkit";

const movieTicket = {
  selectedSeats: [],
  totalPrice: 0,
};

const movieTicketReducer = (state = movieTicket, action) => {
  switch (action.type) {
    case "movieTicket/SelectedSeat": {
      const { isSelected, ...seat } = action.payload;

      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.price;
        return { ...state, selectedSeats, totalPrice };
      }

      const selectedSeats = state.selectedSeats.filter(
        (item) => item.name !== seat.name
      );
      const totalPrice = state.totalPrice - seat.price;
      return { ...state, selectedSeats, totalPrice };
    }

    case "movieTicket/RemoveSeat": {
      const seat = action.payload;
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.name !== seat.name
      );
      const totalPrice = state.totalPrice - seat.price;
      return { ...state, selectedSeats, totalPrice };
    }

    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    movieTicket: movieTicketReducer,
  },
});

export default store;
