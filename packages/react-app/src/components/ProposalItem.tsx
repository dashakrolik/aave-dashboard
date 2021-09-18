import { StyledCard } from '../styled-components/Card';

import StateChip from './StateChip';
import { useState } from "react"
import ShowMoreButton from './ShowMoreButton';
interface IProposalItemProps {
  proposalItem: TProposalItem;
  onClick: (iteam: any) => void;
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

  return (
      <StyledCard key={id}>
        <p style={{ fontSize: '14px' }}>AIP {aipNumber}:  {title}</p>
        <ShowMoreButton proposalItem={props.proposalItem} onClick={props.onClick} />
        <StateChip state={state} />
      </StyledCard>
  );
};

export default ProposalItem;
