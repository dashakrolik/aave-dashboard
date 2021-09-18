import ProposalItem from "./ProposalItem";
interface IProposalItemListProps {
  data: any;
};

const ProposalItemList = (props: IProposalItemListProps) => {
  return (
    <>
      {props.data?.map((item: any) => (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px'
        }}>
          <ProposalItem proposalItem={item} />
        </div>
      ))}

    </>
  );
}

export default ProposalItemList;
