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

  return (
    <Button variant="contained" onClick={() => props.onClick(props.proposalItem)}>showMore</Button>
  );
};

export default ShowMoreButton;
