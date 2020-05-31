import React from "react";
import MailConfirmation from "../../components/MailConfirmation";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";

describe("MailConfirmation Component Testing", () => {
  const mail = mount(
    <BrowserRouter>
      <MailConfirmation />
    </BrowserRouter>
  );
  test("Mail Confirmation Render", () => {
    expect(mail.length).toEqual(1);
  });
});
