import React from "react";

import Left from "./Left";
import Right from "./Right";

export default function index() {
  return (
    <section className="flex flex-col h-screen">
      <div className="h-[62.5px] flex-[0_1_auto]"></div>
      <div className="relative flex flex-[1_1_auto]">
        <Left />
        <Right />
      </div>
    </section>
  );
}
