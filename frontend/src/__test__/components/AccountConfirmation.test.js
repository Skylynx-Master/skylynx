import React from "react";
import AccountConfirmation from "../../components/AccountConfirmation";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";

describe("AccountConfirmation Component Testing", () => {
  const confirmation = mount(
    <BrowserRouter>
      <AccountConfirmation />
    </BrowserRouter>
  );

  test("Account Confirmation Render", () => {
    expect(confirmation.length).toEqual(1);
  });

  test("Account Confirmation title Render", () => {
    expect(confirmation.find(".AccountConfirmation-title").length).toEqual(1);
  });

  test("Account Confirmation title text", () => {
    expect(confirmation.find(".AccountConfirmation-title").text()).toEqual(
      "Se ha confirmado su cuenta!!!"
    );
  });

  test("Account Confirmation image render", () => {
    expect(confirmation.find(".AccountConfirmation-image").length).toEqual(1);
  });

  test("Account Confirmation button render", () => {
    expect(confirmation.find(".AccountConfirmation-button").length).toEqual(1);
  });
  test("Account Confirmation button text", () => {
    expect(confirmation.find(".AccountConfirmation-button").text()).toEqual(
      "Iniciar Sesión"
    );
  });
});
