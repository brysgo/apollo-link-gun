import { Observable, ApolloLink, execute } from "apollo-link";
import gql from "graphql-tag";

import { GunLink } from "../gunLink";

import * as Gun from "gun/gun";

// TODO: use graphql codegen
type Stub = {
  id: string;
};

type Query = {
  sampleQuery: Stub;
};

const typeDefs = `
type Stub {
  id: String
}

type Query {
  sampleQuery: Stub
}
`;

const gun = Gun<Query>();

gun.get("sampleQuery").put({ id: "testing" });

const sampleQuery = gql`
  query SampleQuery {
    sampleQuery {
      id
    }
  }
`;

const sampleMutation = gql`
  mutation SampleMutation {
    stub(param: "value") {
      id
    }
  }
`;

const schema = typeDefs;

describe("GunLink", () => {
  it("calls next and then complete", (done) => {
    const next = jest.fn();
    const link = new GunLink({ schema: undefined, gun });
    const observable = execute(link, {
      query: sampleQuery,
    });
    observable.subscribe({
      next: (result) => {
        expect(result).toEqual({
          data: {
            sampleQuery: {
              id: "testing",
            },
          },
        });
        done();
      },
      error: (error) => expect(false),
    });
  });
});
