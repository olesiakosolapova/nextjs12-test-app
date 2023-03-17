import React from "react";
import { Footer } from "./Footer";
import { Provider } from "react-redux";
import store from "../../../store";
import { preloadFn } from "../../api/preloadFn";
import { usePreload } from "../../hooks/usePreload";
import { Navbar } from "./Navbar";

type propsChildren = {
  children: any;
};
export const Layout = (props: propsChildren) => {
  usePreload(preloadFn);

  return (
    <div>
      <Provider store={store}>
        <Navbar />
        {props.children}
        <Footer />
      </Provider>
    </div>
  );
};
