import React from "react";
import Landing from "../../components/Landing";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Landing Component Testing", () => {
  const landing = mount(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );

  test("landing Render", () => {
    expect(landing.length).toEqual(1);
  });
});

describe("landing Snapshot", () => {
  test("Test UI Map component", () => {
    const snapmap = create(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    );
    expect(snapmap.toJSON()).toMatchSnapshot();
  });
});
