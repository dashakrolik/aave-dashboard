import Button from '@material-ui/core/Button';

interface IProposalItemProps {
  proposalItem: TProposalItem;
  onClick: (item: TProposalItem) => void;
};

type TProposalItem = {
  id: string;
  title: string;
  aipNumber: number;
  state: string;
  shortDescription: string;
};

const ShowMoreButton = (props: IProposalItemProps) => {
  const { proposalItem, onClick } = props;

  return (
    <Button size="small" color="primary" onClick={() => onClick(proposalItem)}>
      <span style={{ color: 'white' }}>show details</span>
    </Button>
  );
};

export default ShowMoreButton;
