"use client";

import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthUser } from "@/redux/slices/authUser";

const LOCAL_STORAGE = [
  {
    key: "userData",
    reducer: (data) => setAuthUser(data),
  },
];

const RootLayoutWrapper = ({ children }) => {
  // router
  const pathname = usePathname();

  // redux
  const dispatch = useDispatch();

  useEffect(() => {
    rehydrateRedux();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const rehydrateRedux = () => {
    try {
      LOCAL_STORAGE.forEach((item) => {
        const { key, reducer } = item;
        const localData = JSON.parse(localStorage.getItem(key));
        if (localData) {
          let data = {};
          if (key === "userData") {
            data.userData = localData;
            const token = Cookies.get("token");
            if (token) {
              data.token = token;
            }
          } else {
            data = localData;
          }
          // send to redux
          dispatch(reducer(data));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return children;
};

export default RootLayoutWrapper;
