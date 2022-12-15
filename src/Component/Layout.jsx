import React, { Children } from "react";

const Layout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <div class="header">
        <h1>Expense Tracker</h1>
      </div>

      {/* main */}
      <div class="main">
        <div class="container">{children}</div>
      </div>

      {/* footer */}
      <div class="footer">&copy;Footer</div>
    </div>
  );
};

export default Layout;
