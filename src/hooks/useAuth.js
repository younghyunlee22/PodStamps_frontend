import { useState, useEffect } from "react";
import axios from "axios";
const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/signin", {
        code,
      })
      .then((res) => {
        const { accessToken, refreshToken, expiresIn } = res.data;
        console.log(res.data)
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setExpiresIn(expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch(() => {
        // redirect the user
        window.location = "/";
      });
  }, [code]);

  return accessToken;
};

export default useAuth;