import { StyledCard } from "../styled-components/Card";
import ProposalItem from "./ProposalItem";
interface IProposalItemListProps {
  data: any;
  // onClick: (item: any) => void;
};

const OnChainProposals = (props: IProposalItemListProps) => {
  return (
    <>
      {props.data?.map((item: any) => (
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
