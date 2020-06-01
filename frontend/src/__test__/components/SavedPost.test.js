import React from 'react';
import SavedPost from '../../components/SavedPost';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

describe("SavedPost Component Testing", () => {
  const savepost = mount(
    <BrowserRouter>
      <SavedPost />
    </BrowserRouter>
  );
  test("SavedPost Render", () => {
    expect(savepost.length).toEqual(1);
  });

  test("SavedPost container render", () => {
    expect(savepost.find(".SavedPost").length).toEqual(1);
  });

  test("SavedPost title Render", () => {
    expect(savepost.find(".SavedPost-title").length).toEqual(1);
  });

  test("SavedPost image render", () => {
    expect(savepost.find(".SavedPost-check").length).toEqual(1);
  });

  test("SavedPost instructions render", () => {
    expect(savepost.find(".Savedpost-instructions").length).toEqual(1);
  });

  test("SavedPost instructions text", () => {
    expect(savepost.find(".Savedpost-instructions").text()).toEqual(
      "Espere a que uno de nuestros asesores revise y publique su inmueble."
    );
  });

  test("SavedPost second image render", () => {
    expect(savepost.find(".SavedPost-clock").length).toEqual(1);
  });

  test("SavedPost link render", () => {
    expect(savepost.find(".SavedPost-route").length).toEqual(3);
  });

});

describe("SavedPost Snapshot", () => {
  test("Test UI SavedPost component", () => {
    const publish = create(
      <BrowserRouter>
        <SavedPost />
      </BrowserRouter>
    );
    expect(publish.toJSON()).toMatchSnapshot();
  });
});