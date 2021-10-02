import Button from '@material-ui/core/Button';

interface IProposalItemProps {
  proposalItem: TProposalItem;
  onClick: (e: React.MouseEvent<HTMLElement>, item: TProposalItem) => void;
};

const ShowMoreButton = (props: IProposalItemProps) => {
  const { proposalItem, onClick } = props;

  return (
    <Button size='small' color='primary' onClick={(e) => onClick(e, proposalItem)}>
      <span style={{ color: 'white' }}>show details</span>
    </Button>
  );
};

export default ShowMoreButton;
