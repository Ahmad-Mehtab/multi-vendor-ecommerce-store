import React, { useState } from "react";
import styles from "../styles/styles";
import ProfileSideBar from "../components/Profile/ProfileSideBar.jsx";
import ProfileContent from "../components/Profile/ProfileContent.jsx";

function ProfilePage() {
  const [active, setActive] = useState(0);
  return (
    <div className="bg-[#f5f5f5]">
      <div className={`${styles.section} flex py-5 gap-5`}>
        <div className="w-[335px] px-4">
          <ProfileSideBar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />                                                                                                                                  
      </div>
    </div>
  );
}

export default ProfilePage;                                             
