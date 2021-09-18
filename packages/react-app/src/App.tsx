import { useQuery } from "@apollo/react-hooks";
import { Contract } from "@ethersproject/contracts";
import { getDefaultProvider } from "@ethersproject/providers";
import { useEffect, useState } from "react";

import { Body, Button, Header } from "./styled-components";
import useWeb3Modal from "./hooks/useWeb3Modal";

import { addresses, abis } from "@project/contracts";
import GET_TRANSFERS from "./graphql/subgraph";
import GET_PROPOSALS from "./graphql/subgraph";

import Tabs from "./components/Tabs";
import ConnectWallet from "./components/ConnectWallet";

function App() {

  return (
    <>
      <Header>
       {/* <ConnectWallet /> */}
      </Header>
      <Body>
        <Tabs />
      </Body>
    </>
  );
}

export default App;
