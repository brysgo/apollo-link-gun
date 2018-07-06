(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('apollo-link'), require('graphql-gun')) :
    typeof define === 'function' && define.amd ? define(['exports', 'apollo-link', 'graphql-gun'], factory) :
    (factory((global.apolloLink = global.apolloLink || {}, global.apolloLink.gun = {}),global.apolloLink.core,null));
}(this, (function (exports,apolloLink,graphqlGun) { 'use strict';

    graphqlGun = graphqlGun && graphqlGun.hasOwnProperty('default') ? graphqlGun['default'] : graphqlGun;

    class GunLink extends apolloLink.ApolloLink {
        constructor({ schema, gun }) {
            super();
            this.schema = schema;
            this.gun = gun;
        }
        request(operation) {
            return new apolloLink.Observable(observer => {
            });
        }
    }

    exports.GunLink = GunLink;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bundle.umd.js.map
