import express = require("express");
import {graphqlExpress, graphiqlExpress} from "graphql-server-express";
import bodyParser = require("body-parser");
import {printSchema} from "graphql/utilities/schemaPrinter";
// import schema from "./data/schema";

const GRAPHQL_PORT = 8080;

const graphQLServer = express();

// graphQLServer.use("/graphql", bodyParser.json(), graphqlExpress({
//     // Give the schema to the server
//     schema,
//     context: {}
// }));

// Use graphiql to interact with the api on the front end
graphQLServer.use("/graphiql", graphiqlExpress({
    endpointURL: "/graphql"
}));

graphQLServer.use("/schema", (req, res) => {
    res.set("Content-type", "text/plain");
    res.send(printSchema);
});

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
    `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
