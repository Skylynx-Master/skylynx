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
});
