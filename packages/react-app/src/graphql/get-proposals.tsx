import { gql } from "apollo-boost";

const GET_PROPOSALS = gql`
  {
    proposals(first: 50, orderBy: aipNumber, orderDirection: desc) {
      id
      state
      title
      aipNumber
      ipfsHash
      creator
      shortDescription
      createdTimestamp
      startBlock
      endBlock
      currentYesVote
      currentNoVote
    }
  }
`;

export default GET_PROPOSALS;
