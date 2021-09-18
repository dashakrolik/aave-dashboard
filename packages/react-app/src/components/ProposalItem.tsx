import Card from '@material-ui/core/Card';
import { StyledCard } from '../styled-components/Card';

interface IProposalItemProps {
  proposalItem: TProposalItem;
};

type TProposalItem = {
  id: string;
  shortDescription: string;
};

const ProposalItem = (props: IProposalItemProps) => {
  return (
    <StyledCard key={props.proposalItem.id}>
      {props.proposalItem?.shortDescription}
    </StyledCard>
  );
};

export default ProposalItem;
