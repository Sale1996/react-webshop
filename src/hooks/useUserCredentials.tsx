import { useState } from "react";
import { UserCredentials } from "context/account/AccountProvider";

const InitialUserCredentials: UserCredentials = {
  username: "johnd",
  password: "m38rmF$",
};

const useUserCredentials = (): [
  UserCredentials,
  (userName: string) => void,
  (userPassword: string) => void
] => {
  const [userCredentials] = useState<UserCredentials>(InitialUserCredentials);

  const setUserName = (userName: string) => {};

  const setUserPassword = (userPassword: string) => {};

  return [userCredentials, setUserName, setUserPassword];
};

export default useUserCredentials;
