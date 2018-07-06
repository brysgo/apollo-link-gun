(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('apollo-link'), require('graphql')) :
    typeof define === 'function' && define.amd ? define(['exports', 'apollo-link', 'graphql'], factory) :
    (factory((global.apolloLink = global.apolloLink || {}, global.apolloLink.schema = {}),global.apolloLink.core,global.graphql));
}(this, (function (exports,apolloLink,graphql) { 'use strict';

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var SchemaLink = /** @class */ (function (_super) {
        __extends(SchemaLink, _super);
        function SchemaLink(_a) {
            var schema = _a.schema, rootValue = _a.rootValue, context = _a.context;
            var _this = _super.call(this) || this;
            _this.schema = schema;
            _this.rootValue = rootValue;
            _this.context = context;
            return _this;
        }
        SchemaLink.prototype.request = function (operation) {
            var _this = this;
            return new apolloLink.Observable(function (observer) {
                Promise.resolve(graphql.execute(_this.schema, operation.query, _this.rootValue, typeof _this.context === 'function'
                    ? _this.context(operation)
                    : _this.context, operation.variables, operation.operationName))
                    .then(function (data) {
                    if (!observer.closed) {
                        observer.next(data);
                        observer.complete();
                    }
                })
                    .catch(function (error) {
                    if (!observer.closed) {
                        observer.error(error);
                    }
                });
            });
        };
        return SchemaLink;
    }(apolloLink.ApolloLink));

    exports.SchemaLink = SchemaLink;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bundle.umd.js.map
