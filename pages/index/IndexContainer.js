import React from "react";
import { Query } from "react-apollo";
import { GET_DESK_PICS } from "./IndexQueries";

export default class extends React.Component {
  render() {
    return (
      <Query query={GET_DESK_PICS} variables={{ page: 0 }}>
        {({ data }) => <>{JSON.stringify(data)}</>}
      </Query>
    );
  }
}
