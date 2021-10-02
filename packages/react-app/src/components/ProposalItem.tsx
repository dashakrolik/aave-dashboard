import { StyledCard } from '../styled-components/Card';

import StateChip from './StateChip';

import ShowMoreButton from './ShowMoreButton';
interface IProposalItemProps {
  proposalItem: TProposalItem;
  onClick: (e: React.MouseEvent<HTMLElement>, item: TProposalItem) => void;
};

const ProposalItem = (props: IProposalItemProps) => {
  const { proposalItem:
    { id, aipNumber, title, state, currentYesVote, currentNoVote }, proposalItem, onClick
  } = props;

  return (
    <StyledCard key={id}>
      <p style={{ fontSize: '14px' }}>
        <strong>AIP {aipNumber}: </strong>{title}
      </p>
      <p style={{ fontSize: '14px' }}>
        <strong>Yes votes: </strong>{currentYesVote}
      </p>
      <p style={{ fontSize: '14px' }}>
        <strong>No votes: </strong>{currentNoVote}
      </p>
      <StateChip state={state} />
      <ShowMoreButton proposalItem={proposalItem} onClick={onClick} />
    </StyledCard>
  );
};

export default ProposalItem;
