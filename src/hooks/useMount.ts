import { useEffect } from "react";

/**
 * 在组件挂载时执行提供的函数。
 *
 * @param {() => void} fn - 要在挂载时执行的函数
 * @return {void} 
 */
const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
