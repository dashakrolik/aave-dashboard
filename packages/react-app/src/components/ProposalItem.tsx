import { StyledCard } from '../styled-components/Card';

import StateChip from './StateChip';

import ShowMoreButton from './ShowMoreButton';
interface IProposalItemProps {
  proposalItem: TProposalItem;
  onClick: (item: any) => void;
};

type TProposalItem = {
  id: string;
  title: string;
  aipNumber: number;
  state: string;
  shortDescription: string;
};

const ProposalItem = (props: IProposalItemProps) => {
  const { proposalItem:
    { id, aipNumber, title, state }, proposalItem, onClick
  } = props;

  return (
    <StyledCard key={id}>
      <p style={{ fontSize: '14px' }}>
        <strong>AIP {aipNumber}: </strong>{title}
      </p>
      <StateChip state={state} />
      <ShowMoreButton proposalItem={proposalItem} onClick={onClick} />
    </StyledCard>
  );
};

export default ProposalItem;
