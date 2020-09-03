import defaultAxios from "axios";
import { useEffect, useState } from "react";

// 사용자가 axios 인스턴스를 입력하지 않을 경우 Default 값 사용
const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  // if (!options.url) {
  //   return;
  // }

  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({ ...state, loading: false, data });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, []);

  return { ...state };
};

export default useAxios;
