import * as React from 'react';
import {log} from "./log";

export const useAsync = (func: () => Promise<any>, inputs: any[]): void => {
  React.useEffect(() => {
    func().catch(log);
  }, [inputs, func]);
};
