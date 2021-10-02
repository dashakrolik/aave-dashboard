import ProposalItem from "./ProposalItem";
interface IProposalItemListProps {
  data: TProposalItem[];
  onClick: (e: React.MouseEvent<HTMLElement>, item: TProposalItem) => void;
};

const ProposalItemList = (props: IProposalItemListProps) => {
  return (
    <>
      {props.data?.map((item: TProposalItem) => (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 32px 24px 16px'
        }} key={item?.id}>
          <ProposalItem proposalItem={item} onClick={props.onClick} />
        </div>
      ))}

    </>
  );
}

export default ProposalItemList;
