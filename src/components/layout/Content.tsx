import React from "react";
import Sidebar from "./Sidebar";
import {Task} from "../Task";

const Content = () => {
  return (
    <section>
      <Sidebar/>
      <Task/>
    </section>
  )
};

export default Content;
