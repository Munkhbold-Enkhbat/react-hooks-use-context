import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";
import { UserContext } from "../context/user"

function Interests() {

  const { user } = useContext(UserContext)
  const themeData = useContext(ThemeContext)
  
  return (
    <div>
      <h4>Interests</h4>
      <ul className={themeData.theme}>
        {user.interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}

export default Interests;
