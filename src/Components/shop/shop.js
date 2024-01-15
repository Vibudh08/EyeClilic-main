import React from "react";
import Title from "./Title";
import Sidepanel from "./sidepanel";
import Rightpanel from "./rightpanel";
import { useEffect } from "react";

export default function Shop() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Title />
      <section class="md">
        <div class="container">
          <div class="row">
            <Sidepanel />
            <Rightpanel />
          </div>
        </div>
      </section>
    </>
  );
}
