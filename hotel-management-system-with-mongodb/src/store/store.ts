import { createStore, applyMiddleware, Store } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import {
  DispatchType,
  IAllReservations,
  IReservation,
} from "../interfaces/interfaces";
import roomsReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, roomsReducer);

const store: Store<
  IAllReservations,
  { type: string; payload: IReservation }
> & {
  dispatch: DispatchType;
} = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;
