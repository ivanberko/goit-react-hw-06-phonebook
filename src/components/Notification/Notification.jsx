import React from "react";
import { notify,notifyText } from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={notify}>
      <p className={notifyText}>Contact already exists or incorrect data !</p>
    </div>
  );
};

export default Notification;
