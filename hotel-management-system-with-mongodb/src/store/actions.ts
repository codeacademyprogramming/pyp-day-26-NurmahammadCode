import { IReservation } from "../interfaces/interfaces";

export const addReservation = (payload: IReservation) => ({
  type: "ADD_RESERVATION",
  payload: payload,
});
