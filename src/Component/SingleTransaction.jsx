import React from "react";
import editImage from "../assets/images/edit.svg";
import deleteImage from "../assets/images/delete.svg";

const SingleTransaction = () => {
  return (
    <div>
      <li class="transaction income">
        <p>Earned this month</p>
        <div class="right">
          <p>৳ 100</p>
          <button class="link">
            <img class="icon" src={editImage} />
          </button>
          <button class="link">
            <img class="icon" src={deleteImage} />
          </button>
        </div>
      </li>
    </div>
  );
};

export default SingleTransaction;
