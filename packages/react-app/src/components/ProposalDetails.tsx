import Card from '@material-ui/core/Card';
import { useContext } from 'react';
import ProposalContext from './ProposalsContext';

const ProposalDetails = () => {
  const selected: any = useContext(ProposalContext);

  return (
    <Card>
      {selected.title}
    </Card>
  );
};

export default ProposalDetails;
