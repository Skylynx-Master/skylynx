import React from "react";
import AccountConfirmation from "../components/AccountConfirmation";
import MailConfirmation from "../components/MailConfirmation";
import SavedPost from "../components/SavedPost";
import PublishConfirmation from "../components/PublishConfirmation";

const AllModals = () => {
  return (
    <div>
      <AccountConfirmation />
      <SavedPost />
      <PublishConfirmation />
      <MailConfirmation />
    </div>
  );
};

export default AllModals;
