import React, { Fragment } from "react";
import ComposeForm from "./ComposeForm";
import Inbox from "./Inbox";
import SidePanel from "./SidePanel";

const Home = () => {
  return (
    <Fragment>
      {/* <ComposeForm /> */}
      <Inbox /><div class="col py-3">
        <ComposeForm />
        <Inbox />
      </div>
    </Fragment>
  );
};
export default Home;