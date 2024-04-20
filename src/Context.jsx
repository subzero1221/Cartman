import { createContext, useReducer } from "react";

export const CryptoContext = createContext();
const initialState = { page: 9, openedMarket: "" };

function reducer(state, action) {
  switch (action.type) {
    case "Next/page":
      return {
        ...state,
        page: state.page + 10,
      };
    case "Prev/page":
      return {
        ...state,
        page: state.page - 10,
      };
    case "set/openedMarket":
      return {
        ...state,
        openedMarket: action.payload,
      };
    default:
      throw new Error("Something went wrong in Context");
  }
}

export function CryptoContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CryptoContext.Provider value={{ state, dispatch }}>
      {children}
    </CryptoContext.Provider>
  );
}
