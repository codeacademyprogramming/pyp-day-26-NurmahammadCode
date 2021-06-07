import { IReservation, IAllReservations } from "../interfaces/interfaces";
import { ADD_RESERVATION } from "./constants";

const initialState: IAllReservations = {
  reservations: [],
};

export default function roomsReducer(
  state: IAllReservations = initialState,
  action: { type: string; payload: IReservation }
): IAllReservations {
  switch (action.type) {
    case ADD_RESERVATION: {
      let reservations = [...state.reservations];
      const isThereRoom = reservations.findIndex((item) => {
        if (item.reservations[0].roomId === action.payload.roomId) return true;
        return false;
      });

      if (isThereRoom === -1) {
        const arrayFirst = [];
        arrayFirst.push(action.payload);
        const objectFirst = {
          id: action.payload.roomId,
          reservations: arrayFirst,
        };
        reservations.push(objectFirst);
      } else {
        reservations[isThereRoom].reservations.push(action.payload);
      }
      return { ...state, reservations };
    }
    default:
      return state;
  }
}
