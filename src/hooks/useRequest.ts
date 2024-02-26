import { useCallback, useState } from "react";
import useMount from "./useMount";

type TService = (params?: Record<string, string>) => Promise<unknown>;

type TRecordString = Record<string, string>;

interface IOptions {
  params?: TRecordString;
  manual?: boolean;
  onSuccess?: (res: unknown) => void;
  onError?: (err: unknown) => void;
}

const useRequest = (service: TService, options: IOptions) => {
  const [data, setData] = useState<unknown>();
  const [loading, setLoading] = useState(false);

  const init = useCallback(
    async (currentParams?: TRecordString) => {
      try {
        setLoading(true);
        const res = await service(currentParams);
        setData(res);
        setLoading(false);
        options.onSuccess && options.onSuccess(res);
        return Promise.resolve(res);
      } catch (err: unknown) {
        setLoading(false);
        options.onError && options.onError(err);
        return Promise.reject(err);
      }
    },
    [service]
  );

  useMount(() => {
    if (!options.manual) {
      init(options?.params);
    }
  });

  const run = (runParams: TRecordString) => init(runParams);

  return { loading, data, run };
};

export default useRequest;
