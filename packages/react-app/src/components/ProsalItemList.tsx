import ProposalItem from "./ProposalItem";
interface IProposalItemListProps {
  data: any;
  onClick: (item: any) => void;
};

const ProposalItemList = (props: IProposalItemListProps) => {
  return (
    <>
      {props.data?.map((item: any) => (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 32px 24px 16px'
        }}>
          <ProposalItem key={item?.id} proposalItem={item} onClick={props.onClick}/>
        </div>
      ))}

    </>
  );
}

export default ProposalItemList;
