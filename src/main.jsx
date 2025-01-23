import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Counter } from "./redux-toolkit/counter";
import { store } from "./redux-toolkit/store/store";
import {Provider} from 'react-redux'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </StrictMode>
);
