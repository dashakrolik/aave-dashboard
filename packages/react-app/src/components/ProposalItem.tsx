import { StyledCard } from '../styled-components/Card';

import StateChip from './StateChip';
import { useState, useContext } from "react"
import ProposalContext from './ProposalsContext';
interface IProposalItemProps {
  proposalItem: TProposalItem;
};

type TProposalItem = {
  id: string;
  title: string;
  aipNumber: number;
  state: string;
  shortDescription: string;
};

const ProposalItem = (props: IProposalItemProps) => {
  const { proposalItem:
    { id, aipNumber, title, state }
  } = props;

  const [selected, setSelected] = useState<any>({});
  const value = { selected, setSelected };

  const setSelectedProposal = () => {
    setSelected(props.proposalItem);
    console.log(value)
  }

  return (
    <ProposalContext.Provider value={value}>
      <StyledCard key={id} onClick={() => setSelectedProposal()}>
        <p style={{ fontSize: '14px' }}>AIP {aipNumber}:  {title}</p>
        <StateChip state={state} />
      </StyledCard>
    </ProposalContext.Provider>
  );
};

export default ProposalItem;
