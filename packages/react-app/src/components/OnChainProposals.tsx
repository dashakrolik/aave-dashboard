import { StyledCard } from "../styled-components/Card";
import ProposalItem from "./ProposalItem";
interface IProposalItemListProps {
  data: any;
};

const OnChainProposals = (props: IProposalItemListProps) => {
  return (
    <>
      {props.data?.map((item: TProposalItem) => (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 32px 24px 16px'
        }}>
          <StyledCard>
          </StyledCard>
        </div>
      ))}

    </>
  );
}

export default OnChainProposals;
