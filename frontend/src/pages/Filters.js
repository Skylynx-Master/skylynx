import React from "react";
import SearchAddress from "../components/SearchAddress";
import PublishConfirmation from '../components/PublishConfirmation';
import AccountConfirmation from '../components/AccountConfirmation';
import MailConfirmation from '../components/MailConfirmation';
import SavedPost from '../components/SavedPost';

function Filters() {
  return (
    <div>
      {/* <SearchAddress /> */}
      <PublishConfirmation />
      <SavedPost />
      <AccountConfirmation />
      <MailConfirmation />
    </div>
  );
}

export default Filters;
