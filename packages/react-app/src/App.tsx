import { Body, Header } from "./styled-components";

import Tabs from "./components/Tabs";
import ConnectWallet from "./components/ConnectWallet";

function App() {
  return (
    <>
      <Header>
       <ConnectWallet />
      </Header>
      <Body>
        <Tabs />
      </Body>
    </>
  );
}

export default App;
