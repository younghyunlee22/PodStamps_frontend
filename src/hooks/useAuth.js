import {useState, useEffect} from "react";
import axios from "axios";

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        let ignore = false;
        console.log("ignore", ignore);
        if (!ignore) {
            axios
                .post("http://localhost:8000/signin", {
                    code,
                })
                .then((res) => {
                    setAccessToken(res.data.accessToken);
                    setRefreshToken(res.data.refreshToken);
                    setExpiresIn(res.data.expiresIn);
                    const {accessToken, refreshToken, expiresIn} = res.data;
                    console.table({
                        accessToken,
                        refreshToken,
                        expiresIn,
                    });
                    // remove the code from the URL
                    window.history.pushState({}, null, "/");
                })
                .catch((err) => {
                    window.history.pushState({}, null, "/");
                    console.log(err);
                });
        }

        return () => {
            ignore = true;
        };
    }, [code]);

    useEffect(() => {
        if (!refreshToken || !expiresIn) return;
        const interval = setInterval(() => {
            axios
                .post("http://localhost:8000/refresh", {
                    refreshToken,
                })
                .then((res) => {
                    setAccessToken(res.data.accessToken);
                    setExpiresIn(res.data.expiresIn);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, (expiresIn - 60) * 1000); // one minute before it expires * 1000 to convert to milliseconds

        return () => clearInterval(interval);
    }, [refreshToken, expiresIn]);

    return accessToken;
}
