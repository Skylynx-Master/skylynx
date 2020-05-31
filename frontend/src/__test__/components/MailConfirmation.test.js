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
  test("Mail Confirmation title Render", () => {
    expect(mail.find(".MailConfirmation-title").length).toEqual(1);
  });

  test("Mail Confirmation title text", () => {
    expect(mail.find(".MailConfirmation-title").text()).toEqual(
      "Verifique su correo para confirmar su cuenta"
    );
  });

  test("Mail Confirmation image render", () => {
    expect(mail.find(".MailConfirmation-image").length).toEqual(1);
  });
});
