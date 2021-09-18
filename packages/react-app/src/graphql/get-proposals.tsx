import { gql } from "apollo-boost";

// See more example queries on https://thegraph.com/explorer/subgraph/paulrberg/create-eth-app
const GET_PROPOSALS = gql`
  {
    proposals(first: 50, orderBy: aipNumber, orderDirection: desc) {
      id
      state
      ipfsHash
      creator
      shortDescription
      createdTimestamp
      startBlock
      endBlock
    }
  }
`;

export default GET_PROPOSALS;
