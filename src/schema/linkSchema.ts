import { gql } from "apollo-server-express";

export default gql`
  type Query {
    admin: AdminQuery
    my: My
    viewer: Viewer
  }
  type Mutation {
    admin: AdminMutation
    my: MyMutation
    viewer: ViewerMutation
  }
  type Viewer {
    _: Boolean
  }
  type My {
    _: Boolean
  }
  type AdminQuery {
    _: Boolean
  }
  type ViewerMutation {
    _: Boolean
  }
  type MyMutation {
    _: Boolean
  }
  type AdminMutation {
    _: Boolean
  }
`;
