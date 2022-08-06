import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6i0d9ba4g9701uq6vn7bm3e/master',
  cache: new InMemoryCache(),
})
