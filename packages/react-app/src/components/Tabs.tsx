import React, { useEffect, useState } from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { StyledTab, StyledTabs } from "../styled-components/Tabs";
import { useQuery } from "@apollo/react-hooks";

import useWeb3Modal from "../hooks/useWeb3Modal";
import GET_PROPOSALS from "../graphql/get-proposals";
import ProposalItemList from "./ProsalItemList";
import ProposalContext from "./ProposalsContext";

const Tabs = () => {
  const [value, setValue] = useState(0);
  const { loading, error, data } = useQuery(GET_PROPOSALS);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

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
              overflow: 'auto',
              height: '100vh',
              marginRight: '16px',
              marginLeft: '16px',
              // borderRadius: '0 10px 0 0',
              background: 'linear-gradient(180deg, #943BF3 0%, #5327EE 100%)',
            }}
          >
            <Typography>{children}</Typography>
          </div>
        )
        }
      </div >
    );
  }
  return (
    <ProposalContext.Provider value={data}>
      <div style={{ position: "fixed", top: "70px", width: "100%" }}>
        <Box sx={{ width: '75%' }}>
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
              <StyledTab label="On-chain" />
              <StyledTab label="Snapshot" />
            </StyledTabs>
          </Box>

          <TabPanel value={value} index={0}>
            <ProposalItemList data={data?.proposals} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Box>
      </div>
    </ProposalContext.Provider>
  );
}

export default Tabs;
