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
    <button onClick={() => props.onClick(props.proposalItem)}>showMore</button>
  );
};

export default ShowMoreButton;
