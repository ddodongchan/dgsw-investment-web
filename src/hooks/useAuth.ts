// import { useEffect, useState } from "react";
// import axios from "axios";

// const API = process.env.NEXT_PUBLIC_API || "http://localhost:3000";

// export const useAuth = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

//   const validate = async () => {
//     const token = localStorage.getItem("access_token");
//     if (!token) {
//       setIsAuthenticated(false);
//       return;
//     }

//     try {
//       const res = await axios.get(`${API}/auth/validate`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setIsAuthenticated(res.status === 200);
//     } catch {
//       setIsAuthenticated(false);
//     }
//   };

//   const login = async (login_id: string, password: string) => {
//     try {
//       const res = await axios.post(`${API}/auth/login`, {
//         login_id,
//         password,
//       });
  
//     //   console.log("로그인 응답:", res.data);
  
//       const { access_token, refresh_token } = res.data.data;
  
//       localStorage.setItem("access_token", access_token);
//       localStorage.setItem("refresh_token", refresh_token);
//       setIsAuthenticated(true);
//     } catch {
//       alert("로그인 실패");
//     }
//   };

//   useEffect(() => {
//     validate();
//   }, []);

//   return { isAuthenticated, login };
// };