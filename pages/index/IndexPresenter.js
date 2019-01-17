import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "../../components/image";

const IndePresenter = ({ data = null, page }) => (
  <div className="container">
    <Head>
      <title>desk.pics | Share where you work from.</title>
    </Head>
    <h1>desk pics</h1>
    <div className="images">
      {data &&
        data.GetDeskPics.deskPics &&
        data.GetDeskPics.deskPics.map(
          pic =>
            pic && (
              <Image
                key={pic.id}
                id={pic.id}
                name={pic.user.firstName}
                drink={pic.drink.name}
                location={pic.locationName}
                imageUrl={pic.thumbnailUrl}
                views={pic.views}
              />
            )
        )}
    </div>
    {data && (
      <div className="pagination">
        <Link href={`?page=${page - 1}`}>
          <a className="arrow">{page > 0 && "←"}</a>
        </Link>
        <div className="pages">
          {data.GetDeskPics.currentPage}/{data.GetDeskPics.pages}
        </div>
        <Link href={`?page=${page + 1}`}>
          <a className="arrow">{page < data.GetDeskPics.pages && `→`}</a>
        </Link>
      </div>
    )}
    <style jsx>
      {`
        .container {
          padding-top: 100px;
          height: 100%;
        }
        h1 {
          font-size: 36px;
          font-weight: 600;
        }
        .images {
          margin-top: 80px;
          display: grid;
          grid-gap: 35px;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          grid-auto-rows: minmax(150px, 1fr);
          overflow: hidden;
        }
        .pagination {
          margin: 80px 0;
          display: flex;
          align-items: center;
        }
        .pages {
          margin: 0 10px;
        }
        .arrow {
          font-size: 30px;
          cursor: pointer;
        }
        arrow:hover {
          text-decoration: underline;
        }
      `}
    </style>
  </div>
);

IndePresenter.propTypes = {
  data: PropTypes.object,
  page: PropTypes.number.isRequired
};

export default IndePresenter;
