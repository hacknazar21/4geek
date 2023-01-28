import { IProfile } from "../interfaces/Profile";
import { createContext } from "react";

const profileInit: IProfile = null;
export const ProfileContext = createContext({
  profile: profileInit,
  updateProfile: (newProfile: IProfile) => {},
  reInitProfile: () => {},
});
