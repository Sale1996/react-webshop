import { IUser } from "interfaces";
import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import loginServices from "services/login.services";
import userServices from "services/user.services";
import { AccountContext } from "./AccountContext";
import { AccountReducer } from "./AccountReducer";

export interface UserCredentials {
  username: string;
  password: string;
}

export interface AccountState {
  currentUser: IUser | null;
  token: string;
  isLoggedIn: boolean;
}

export type AccountContextProps = {
  accountState: AccountState;
  login: (userCredentials: UserCredentials) => void;
  logout: () => void;
};

export const InitialAccountState: AccountState = {
  currentUser: null,
  token: "",
  isLoggedIn: false,
};

interface props {
  children: JSX.Element;
}

export const AccountProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(AccountReducer, InitialAccountState);

  let navigate = useNavigate();

  useEffect(() => {
    const accountDataString: string | null =
      localStorage.getItem("accountData");
    if (accountDataString !== null) {
      console.log("Using stored account data.");
      const accountData: AccountState = JSON.parse(accountDataString);
      dispatch({ type: "GetStoredAccountData", payload: accountData });
    }
  }, []);

  const login = (userCredentials: UserCredentials) => {
    loginServices.login(userCredentials).then((response) => {
      console.log(response.data);
      dispatch({ type: "Login", payload: response.data });
      userServices.getAll().then((response) => {
        const users: IUser[] = response.data;
        const user: IUser[] = users.filter((user) => {
          return (
            user.username === userCredentials.username &&
            user.password === userCredentials.password
          );
        });

        if (user.length === 1) {
          console.log(user[0]);
          dispatch({ type: "LoadUserData", payload: user[0] });
          navigate("/");
        }
      });
    });
  };

  const logout = () => {
    dispatch({ type: "Logout", payload: null });
    navigate("/");
  };

  return (
    <AccountContext.Provider
      value={{
        accountState: state,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
