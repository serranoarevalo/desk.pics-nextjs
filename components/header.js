import Link from "next/link";

export default () => (
  <div>
    <Link href={"/about"}>
      <a>about</a>
    </Link>
    <Link href={"/add"}>
      <a>add photo</a>
    </Link>
    <style jsx>
      {`
        div {
          padding: 20px 85px;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10;
        }
        a {
          margin-right: 15px;
          font-size: 14px;
        }
      `}
    </style>
  </div>
);
