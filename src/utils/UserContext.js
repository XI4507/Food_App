import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Rakesh Singh",
    email: "rakeshsingh9625@gmail.com",
  },
});

export default UserContext;
