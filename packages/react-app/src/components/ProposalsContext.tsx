import { createContext } from 'react';

const ProposalContext: any = createContext({
  selected: {},
  setSelected: () => {},
});

export default ProposalContext;