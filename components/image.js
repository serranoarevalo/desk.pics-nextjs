import PropTypes from "prop-types";
import Link from "next/link";
import InfoItem from "./infoItem";

const Image = ({ id, drink, imageUrl, location = "", name }) => (
  <Link href={`/view?desk=${id}`}>
    <a>
      <div className="sImage">
        <div className="card">
          <InfoItem item={drink} />
          <InfoItem item={location} />
          <InfoItem item={name} />
        </div>
      </div>
      <style jsx>
        {`
          .card {
            background-color: white;
            position: absolute;
            height: 100%;
            width: 100%;
            padding: 10px;
            opacity: 0;
          }
          .sImage {
            background: url(${imageUrl});
            padding-bottom: 100%;
            background-size: cover;
            background-position: center center;
            position: relative;
            cursor: pointer;
          }
          .sImage:hover .card {
            opacity: 1;
          }
        `}
      </style>
    </a>
  </Link>
);

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  drink: PropTypes.string.isRequired,
  location: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Image;
