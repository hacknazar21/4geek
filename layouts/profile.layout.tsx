import React from "react";
import ProfileAside from "../components/profile/ProfileAside";
interface Props {
  children: typeof React.Children;
}
function ProfileLayout(props: Props) {
  const { children } = props;
  return (
    <div className="profile__container">
      <div className="profile__box">
        <ProfileAside />
        {children}
      </div>
    </div>
  );
}

export default ProfileLayout;
