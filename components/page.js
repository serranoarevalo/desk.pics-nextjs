import React from "react";
import Link from "next/link";

export default ({ children }) => (
  <div className="container">
    <Link href={"/"}>
      <a>←</a>
    </Link>
    <div className="children">{children}</div>
    <style jsx>{`
      .container {
        padding-top: 100px;
        width: 100%;
      }
      a {
        font-size: 36px;
        cursor: pointer;
      }
      .children {
        margin-top: 80px;
      }
    `}</style>
  </div>
);
