import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import HamburgerMenu from "../../components/HamburgerMenu";
import MiniNav from "../../components/MiniNav";

describe("Header Component Testing", () => {
  const hamburger = mount(
    <BrowserRouter>
      <HamburgerMenu />
    </BrowserRouter>
  );

  test("Hamburger Render", () => {
    expect(hamburger.length).toEqual(1);
  });

  test("Hamburger Lines Render", () => {
    expect(hamburger.find(".IconBurger").length).toEqual(2);
  });

  const mininav = mount(
    <BrowserRouter>
      <MiniNav />
    </BrowserRouter>
  );

  test("MiniNav Menu Availability", () => {
    expect(mininav.length).toEqual(1);
  });
});

describe("HamburgerMenu Snapshot", () => {
  test("Test UI Hamburger Menu component", () => {
    const snaphamburger = create(
      <BrowserRouter>
        <HamburgerMenu />
      </BrowserRouter>
    );
    expect(snaphamburger.toJSON()).toMatchSnapshot();
  });
});
