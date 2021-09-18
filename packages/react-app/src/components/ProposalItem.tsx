import CardContent from '@material-ui/core/Card';
import Typography from '@material-ui/core/Card';
import { StyledCard } from '../styled-components/Card';
import Chip from '@material-ui/core/Chip';
import StateChip from './StateChip';
interface IProposalItemProps {
  proposalItem: TProposalItem;
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
    { id, aipNumber, title, state }
  } = props;
  return (
    <StyledCard key={id}>
        <p style={{ fontSize: '14px' }}>AIP {aipNumber}  {title}</p>
        <StateChip state={state} />
        {/* <p style={{ fontSize: '14px' }}>Description: {shortDescription}</p> */}
    </StyledCard>
  );
};

export default ProposalItem;
