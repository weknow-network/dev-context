// https://reactjs.org/docs/hooks-reference.html
// https://codesandbox.io/s/yw5zkyvx4j?from-embed
// https://upmostly.com/tutorials/how-to-use-Dev-usecontext-hook-in-react
// https://daveceddia.com/usecontext-hook/

import React from "react";

const DevContext = React.createContext<boolean>(false);

export default DevContext;
