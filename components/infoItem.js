import PropTypes from "prop-types";
import React from "react";

const InfoItem = ({ item = "" }) => (
  <div className="item">
    {item}
    <style jsx>{`
      .item {
        display: block;
        margin-bottom: 10px;
        font-family: "Times New Roman", Times, serif;
        font-style: italic;
        font-size: 14px;
        text-transform: capitalize;
      }
    `}</style>
  </div>
);

InfoItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default InfoItem;
