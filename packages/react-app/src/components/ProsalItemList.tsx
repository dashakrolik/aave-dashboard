import ProposalItem from "./ProposalItem";
interface IProposalItemListProps {
  data: any;
  onClick: (e: React.MouseEvent<HTMLElement>, item: any) => void;
};

const ProposalItemList = (props: IProposalItemListProps) => {
  return (
    <>
      {props.data?.map((item: any) => (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 32px 24px 16px'
        }} key={item?.id}>
          <ProposalItem  proposalItem={item} onClick={props.onClick}/>
        </div>
      ))}

    </>
  );
}

export default ProposalItemList;
