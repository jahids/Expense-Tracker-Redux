import React from "react";
import SingleTransaction from "./SingleTransaction";

const Transactions = () => {
  return (
    <div>
      <p class="second_heading">Your Transactions:</p>

      <div class="conatiner_of_list_of_transactions">
        <ul>
          <SingleTransaction />
        </ul>
      </div>
    </div>
  );
};

export default Transactions;
