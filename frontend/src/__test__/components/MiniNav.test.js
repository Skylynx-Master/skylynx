import React from "react";
import MiniNav from "../../components/MiniNav";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("MiniNav Component Testing", () => {
  const mininav = mount(
    <BrowserRouter>
      <MiniNav
       />
    </BrowserRouter>
  );

  test("MiniNav Component Render", () => {
    expect(mininav.length).toEqual(1);
  });

  test("MiniNav links render", () => {
    expect(mininav.find(".MiniNav-links").length).toEqual(2);
  });

});  

describe("MiniNav Snapshot", () => {
  test("Test UI MiniNav component", () => {
    const snapmini = create(
      <BrowserRouter>
        <MiniNav />
      </BrowserRouter>
    );
    expect(snapmini.toJSON()).toMatchSnapshot();
  });
});