import { useEffect, useState } from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Item from '@material-ui/core/Item';

import { StyledTab, StyledTabs } from "../styled-components/Tabs";
import { useQuery } from "@apollo/react-hooks";

// import useWeb3Modal from "../hooks/useWeb3Modal";
import GET_PROPOSALS from "../graphql/get-proposals";
import ProposalItemList from "./ProsalItemList";
import ProposalDetails from "./ProposalDetails";
import OnChainProposals from "./OnChainProposals";

const Tabs = () => {
  const [value, setValue] = useState(0);
  const { loading, error, data } = useQuery(GET_PROPOSALS);
  const [selected, setSelected] = useState<any>({});

  useEffect(() => {
    if (!loading && !error && data) {
      console.log({ proposals: data.proposals });
    }
  }, [loading, error, data]);

  const handleChange = (_event: any, newValue: any) => setValue(newValue);

  const TabPanel = (props: any) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div
            style={{
              overflowY: 'scroll',
              overflowX: 'hidden',
              height: '100vh',
              marginRight: '16px',
              marginLeft: '16px',
              background: 'linear-gradient(180deg, #943BF3 0%, #5327EE 100%)',
            }}
          >
            {children}
          </div>
        )
        }
      </div >
    );
  }

  const OnProposalClick = (item: any) => {
    setSelected(item);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={8}>
        <Box sx={{
          bgcolor: 'rgb(71 6 182 / 81%);',
          width: 'fit-content',
          marginRight: '16px',
          marginLeft: '16px',
          borderRadius: '10px 10px 0 0'
        }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            <StyledTab label="Snapshot" />
            <StyledTab label="On-Chain" />
          </StyledTabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ProposalItemList data={data?.proposals} onClick={OnProposalClick} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <OnChainProposals data={[]} />
        </TabPanel>
      </Grid>
      <Grid item sm={4}>
        <Box sx={{ width: '92%', marginTop: "48px" }}>
          <ProposalDetails proposalItem={selected} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Tabs;
