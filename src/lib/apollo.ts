import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4r49o7r0koc01yyakuidm11/master",
  cache: new InMemoryCache(),
});
