import { store } from "../store";
import { Provider } from "react-redux";

export const withStore = (component: () => React.ReactNode) => () =>
  <Provider store={store}> {component()} </Provider>;
