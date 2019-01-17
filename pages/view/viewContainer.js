import React from "react";
import { Query } from "react-apollo";
import { withRouter } from "next/router";
import ViewPresenter from "./viewPresenter";
import { GET_DESK_PIC } from "./viewQueries";

const ViewContainer = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return (
    <Query query={GET_DESK_PIC} variables={{ id: urlParams.get("desk") }}>
      {({ data, error }) => <ViewPresenter data={data} error={error} />}
    </Query>
  );
};

export default ViewContainer;
