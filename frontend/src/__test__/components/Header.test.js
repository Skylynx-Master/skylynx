import React from "react";
import Header from "../../components/Header";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";

describe("Header Component Testing", () => {
  const header = mount(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  test("Header Render", () => {
    expect(header.length).toEqual(1);
  });

  test("Header Logo", () => {
    expect(header.find(".Header-logo").length).toEqual(1);
  });

  test("Header Icons", () => {
    expect(header.find(".Header-icons").length).toEqual(8);
  });
});
