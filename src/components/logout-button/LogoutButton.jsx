import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

function removeUser() {
  localStorage.removeItem("user")
  
}


export default function LogoutButton({ children }) {
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate();


  function logOut() {
    removeUser()
    setUser(null)
    navigate("/login", { replace: true });
    
    

    


  }

  return (
    <button
      onClick={logOut}
      style={{ color: "red", backgroundColor:"inherit" }}
    >
      {children}
    </button>
  );
}
