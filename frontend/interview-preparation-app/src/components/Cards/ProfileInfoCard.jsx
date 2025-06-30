import React, { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";

function ProfileInfoCard() {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    <div className="flex items-center">
      <img
        src={user.profileImageUrl}
        className="w-11 h-11 bg-gray-300 rounded-full mr-3"
      />
      <div className="text-[15px] text-black font-bold leading-3">
        <div className="">{user.name || ""}</div>
        <button
          className="text-amber-600 text-sm font-semibold cursor-pointer hover:underline"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default ProfileInfoCard;
