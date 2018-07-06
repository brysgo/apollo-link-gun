import sourcemaps from "rollup-plugin-sourcemaps";

const globals = {
  // Apollo
  "apollo-client": "apollo.core",
  "apollo-link": "apolloLink.core",
  "apollo-link-batch": "apolloLink.batch",
  "apollo-utilities": "apollo.utilities",
  "apollo-link-http-common": "apolloLink.httpCommon",
  "zen-observable-ts": "apolloLink.zenObservable",

  //GraphQL
  "graphql/language/printer": "printer",

  "zen-observable": "Observable"
};

module.exports = {
  input: "lib/index.js",
  output: {
    file: "lib/bundle.umd.js",
    format: "umd",
    name: `apolloLink.gun`,
    globals,
    sourcemap: true,
    exports: "named"
  },
  external: Object.keys(globals),
  onwarn,
  plugins: [sourcemaps()]
};

function onwarn(message) {
  const suppressed = ["UNRESOLVED_IMPORT", "THIS_IS_UNDEFINED"];

  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
}
