import Divider from '@material-ui/core/Divider';
import { StyledCard } from '../styled-components/Card';

const ProposalDetails = (props: any) => {
  const { proposalItem: {
    title,
    creator,
    createdTimestamp,
    startBlock,
    endBlock,
    ipfsHash,
    shortDescription
  } } = props;
  return (
    <StyledCard>
      <ul className="proposal-item-details-wrapper">
        <li className="proposal-item-text"><strong>Title:</strong></li>
        <li className="proposal-item-text">{title}</li>
        <Divider component="li"/>
        <li className="proposal-item-text"><strong>Creator:</strong></li>
        <li className="proposal-item-text">{creator}</li>
        <Divider component="li"/>
        <li className="proposal-item-text"><strong>Created timestamp:</strong></li>
        <li className="proposal-item-text">{createdTimestamp}</li>
        <Divider component="li"/>
        <li className="proposal-item-text"><strong>Start block:</strong></li>
        <li className="proposal-item-text">{startBlock}</li>
        <Divider component="li"/>
        <li className="proposal-item-text"><strong>End block:</strong></li>
        <li className="proposal-item-text">{endBlock}</li>
        <Divider component="li"/>
        <li className="proposal-item-text"><strong>IPFS hash:</strong></li>
        <li className="proposal-item-text">{ipfsHash}</li>
        <Divider component="li"/>
        <li className="proposal-item-text"><strong>Description:</strong></li>
        <li className="proposal-item-text">{shortDescription}</li>
        <Divider component="li"/>
      </ul>
    </StyledCard>
  );
};

export default ProposalDetails;
