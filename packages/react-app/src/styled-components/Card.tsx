import { styled } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

export const StyledCard: any = styled((props) => <Card disableRipple {...props} />)(
  ({ theme }) => ({
    height: '80px',
    width: '100%'
  }));

