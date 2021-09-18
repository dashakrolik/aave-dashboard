import { styled } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

export const StyledCard: any = styled((props) => <Card {...props} />)(
  ({ theme }) => ({
    height: '80px',
    width: '100%',
    padding: '8px'
  }));

