import * as React from 'react';

export const useAsync = (func: () => Promise<any>, inputs: any[]): void => {
    React.useEffect(() => {
        func().catch(console.log);
    }, [inputs, func]);
};
