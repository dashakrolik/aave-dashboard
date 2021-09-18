import { gql } from "apollo-boost";

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
