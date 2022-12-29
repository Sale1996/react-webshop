import { IUser } from "interfaces";
import { AccountState, InitialAccountState } from "./AccountProvider";

type AccountAction =
  | { type: "Login"; payload: string }
  | { type: "Logout"; payload: null }
  | { type: "LoadUserData"; payload: IUser }
  | { type: "GetStoredAccountData"; payload: AccountState };

export const AccountReducer = (
  state: AccountState,
  action: AccountAction
): AccountState => {
  switch (action.type) {
    case "Login": {
      const newState = {
        ...state,
        token: action.payload,
        isLoggedIn: true,
      };
      console.log("login execute");
      console.log(JSON.stringify(newState));
      localStorage.setItem("accountData", JSON.stringify(newState));
      return newState;
    }

    case "Logout": {
      localStorage.removeItem("accountData");
      return InitialAccountState;
    }

    case "LoadUserData": {
      const newState = {
        ...state,
        currentUser: action.payload,
      };
      localStorage.setItem("accountData", JSON.stringify(newState));
      return newState;
    }

    case "GetStoredAccountData": {
      return action.payload;
    }

    default:
      return state;
  }
};
