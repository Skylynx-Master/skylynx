import React from "react";
import Header from "../../components/Header";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import HamburgerMenu from "../../components/HamburgerMenu";

describe("Header Component Testing", () => {
  const header = mount(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const hamburgerMenu = mount(
    <BrowserRouter>
      <HamburgerMenu />
    </BrowserRouter>
  );

  test("Header Render", () => {
    expect(header.length).toEqual(1);
  });

  test("Header Logo Render", () => {
    expect(header.find(".Header-logo").length).toEqual(1);
  });

  test("Link title Search/Buscar", () => {
    expect(header.find(".Header-icons_search").text()).toEqual("Buscar");
  });
  test("Link title Favorites/Favoritos", () => {
    expect(header.find(".Header-icons_favorites").text()).toEqual("Favoritos");
  });

  test("Link title Create Post/Crear Publicacion", () => {
    expect(header.find(".Header-icons_createpost").text()).toEqual(
      "Crear Publicación"
    );
  });

  test("Header Icons and Links Render", () => {
    expect(header.find(".Header-icons").length).toEqual(8);
  });

  test("Hamburger Menu Availability", () => {
    expect(hamburgerMenu.length).toEqual(1);
  });
});

describe("Header Snapshot", () => {
  test("Test UI Header component", () => {
    const snapheader = create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(snapheader.toJSON()).toMatchSnapshot();
  });
});
