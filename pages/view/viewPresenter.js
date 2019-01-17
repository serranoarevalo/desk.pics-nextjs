import PropTypes from "prop-types";
import InfoItem from "../../components/infoItem";
import Page from "../../components/page";

const ViewPresenter = ({ data }) => (
  <Page>
    {data && data.GetDeskPic && data.GetDeskPic.deskPic && (
      <div className="view">
        <img className="image" src={data.GetDeskPic.deskPic.bigUrl} />
        <div className="infoBox">
          <InfoItem item={`Drink: ${data.GetDeskPic.deskPic.drink.name}.`} />
          <InfoItem
            item={`Location: ${data.GetDeskPic.deskPic.locationName}.`}
          />
          <InfoItem
            item={`Author: ${data.GetDeskPic.deskPic.user.firstName}.`}
          />
        </div>
      </div>
    )}
    {data && data.GetDeskPic && data.GetDeskPic.error && data.GetDeskPic.error}
    <style jsx>{`
      .view {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 50px;
        width: 100%;
      }
      @media (max-width: 768px) {
        .view {
          grid-template-columns: 1fr;
        }
      }
      .image {
        max-width: 100vh;
      }
      @media (max-width: 1300px) {
        .image {
          max-width: 90%;
        }
      }
      .infoBox {
        align-self: end;
      }
    `}</style>
  </Page>
);

ViewPresenter.propTypes = {
  data: PropTypes.object
};

export default ViewPresenter;
