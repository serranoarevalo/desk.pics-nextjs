import React from "react";
import { Query } from "react-apollo";
import { withRouter } from "next/router";
import IndexPresenter from "./IndexPresenter";
import { GET_DESK_PICS } from "./IndexQueries";

const Page = withRouter(({ router: { query: { page = 0 } } }) => (
  <Query query={GET_DESK_PICS} variables={{ page }}>
    {({ data }) => <IndexPresenter data={data} page={parseInt(page, 10)} />}
  </Query>
));

export default Page;
