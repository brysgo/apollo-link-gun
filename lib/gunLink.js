import { ApolloLink, Observable } from "apollo-link";
import graphqlGun from "graphql-gun";
export class GunLink extends ApolloLink {
    constructor({ schema, gun }) {
        super();
        this.schema = schema;
        this.gun = gun;
    }
    request(operation) {
        return new Observable(observer => {
            async () => {
                // TODO: check schema
                try {
                    for await (const data of graphqlGun(operation.query, this.gun)) {
                        if (!observer.closed) {
                            observer.next({ data });
                        }
                    }
                    observer.complete();
                }
                catch (e) {
                    if (!observer.closed) {
                        observer.error(e);
                    }
                }
            };
        });
    }
}
export default GunLink;
