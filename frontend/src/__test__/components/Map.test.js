import React from "react";
import Map from "../../components/Map";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Map Component Testing", () => {
  const map = mount(
    <BrowserRouter>
      <Map />
    </BrowserRouter>
  );

  test("Map Render", () => {
    expect(map.length).toEqual(1);
  });

});

describe("Map Snapshot", () => {
  test("Test UI Map component", () => {
    const snapmap = create(
      <BrowserRouter>
        <Map />
      </BrowserRouter>
    );
    expect(snapmap.toJSON()).toMatchSnapshot();
  });
});