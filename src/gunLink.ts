import { ApolloLink, Operation, FetchResult, Observable } from "apollo-link";
import * as graphqlGun from "graphql-gun"

export namespace GunLink {
  export type ResolverContextFunction = (
    operation: Operation
  ) => Record<string, any>;

  export interface Options {
    /**
     * The schema to generate responses from.
     */
    schema: any;

    gun: any;
  }
}

export class GunLink extends ApolloLink {
  public schema: any;
  public gun: any;

  constructor({ schema, gun }: GunLink.Options) {
    super();

    this.schema = schema;
    this.gun = gun;
  }

  public request(operation: Operation): Observable<FetchResult> | null {
    return new Observable<FetchResult>(async observer => {
      // TODO: check schema
      try {
        for await (const data of graphqlGun(operation.query, this.gun)) {
          if (!observer.closed) {
            observer.next({data});
          }
        }
        observer.complete();
      } catch (e) {
        if (!observer.closed) {
          observer.error(e);
        }
      }
    });
  }
}

export default GunLink;
