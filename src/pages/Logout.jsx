import { useNavigate } from "react-router-dom";

function Logout() {
  // 記得加括弧才能執行Hook 函式
  const navigate = useNavigate();
  return <button onClick={() => navigate("/login")}>登出</button>;
}

export default Logout;
