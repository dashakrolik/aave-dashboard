import { useEffect, useState } from "react";
// import { useQuery } from "@apollo/react-hooks";
// import { Contract } from "@ethersproject/contracts";
// import { getDefaultProvider } from "@ethersproject/providers";

// import { addresses, abis } from "@project/contracts";
// import { ethers, Signer } from "ethers";

import { StyledButton, } from "../styled-components";
import useWeb3Modal from "../hooks/useWeb3Modal";
import { Button } from "@material-ui/core";
// import GET_TRANSFERS from "../graphql/get-transfers";

// async function readOnChainData() {
//   // Should replace with the end-user wallet, e.g. Metamask
//   const defaultProvider = getDefaultProvider();
//   // Create an instance of an ethers.js Contract
//   // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
//   const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
//   // A pre-defined address that owns some CEAERC20 tokens
//   const tokenBalance = await ceaErc20.balanceOf("0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C");
//   console.log({ tokenBalance: tokenBalance.toString() });
// }

const ConnectWallet = () => {
  // const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  // @TODO: not used, delete
  // useEffect(() => {
  //   if (!loading && !error && data && data.transfers) {
  //     console.log({ transfers: data.transfers });
  //   }
  // }, [loading, error, data]);

  // @ts-ignore
  function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
    const [account, setAccount] = useState("");
    // const [signer, setSigner] = useState<any>({});
    const [rendered, setRendered] = useState("");
    // const [proposalDetails, setProposalDetails] = useState<any>({});

    // const [onChainData, setOnChainData] = useState<any>([]);

    // const fetchOnChainData = async () => {

    // const network = "homestead";

    // Specify your own API keys
    // Each is optional, and if you omit it the default
    // API key for that service will be used.
    // const provider = ethers.getDefaultProvider(network, {
    //   // Old API Key that has been pushed before.
    //   infura: "001691a4a3fe4cd6ad500ba14268e7f3",
    // });

    // const governanceV2HelperContract = new ethers.Contract(
    //   "0x16ff7583ea21055bf5f929ec4b896d997ff35847", // GovernanceV2Helper address
    //   abis.aaveGovHelper,
    //   provider,
    // );

    // const data = await governanceV2HelperContract.getProposals(
    //   "0",
    //   "0xFFFFFFFF",
    //   "0xEC568fffba86c094cf06b22134B23074DFE2252c"
    // );

    // const promiseArray = [] as any;
    // const array = [] as any;
    // for (let i = 0; i < data.length; i++) {
    //   const cid = parseIpfsHash(data[i].ipfsHash);

    //   promiseArray.push(
    //     new Promise((resolve, reject) => {
    //       resolve(get(cid));
    //     })
    //   );

    //   array.push({
    //     forVotes: data[i].forVotes.toString(),
    //     againstVotes: data[i].againstVotes.toString(),
    //     proposalState: data[i].proposalState,
    //     ipfsHash: data[i].ipfsHash,
    //     id: data[i].id,
    //   });
    // }
    // }
    useEffect(() => {
      async function fetchAccount() {
        // const onChain = await fetchOnChainData();
        // setOnChainData(onChain);
        try {
          // if (!provider) {
          //   return;
          // }
          // Load the user's accounts.
          const accounts = await provider.listAccounts();

          setAccount(accounts[0]);

          // Resolve the ENS name for the first account.
          const name = await provider.lookupAddress(accounts[0]);

          // Render either the ENS name or the shortened account address.
          if (name) {
            setRendered(name);

          } else {
            setRendered(account.substring(0, 6) + "..." + account.substring(36));
          }
        } catch (err) {
          setAccount("");
          setRendered("");
          console.error(err);
        }
      }
      fetchAccount();
    }, [account, provider, setAccount, setRendered]);


    // const parseIpfsHash = (ipfsHash: string) => {
    //   const format = "12" + "20" + ipfsHash.substring(2);
    //   const cid = require("bs58").encode(Buffer.from(format, "hex"));
    //   return cid;

    // }

    // const { create } = require("ipfs-http-client");

    // const ipfs = create({
    //   host: "ipfs.infura.io",
    //   port: "5001",
    //   protocol: "https",
    // });

    // async function get(cid: string) {
    //   const catFile = await ipfs.cat(cid);
    //   const buffers = [];
    //   for await (const item of catFile) {
    //     buffers.push(Buffer.from(item));
    //   }
    //   const file = Buffer.concat(buffers);
    //   return file.toString();
    // }

    // const testConnectToAave = async () => {


    //   try {
    //     if (!provider) {
    //       return;
    //     }

    //     const aaveGovHelper = new ethers.Contract(
    //       "0x16ff7583ea21055bf5f929ec4b896d997ff35847", // GovernanceV2Helper address
    //       abis.aaveGovHelper,
    //       provider,
    //     );
    //     const AaveGovernanceV2 = "0xEC568fffba86c094cf06b22134B23074DFE2252c";
    //     const proposalId = 25;

    //     // Get details of proposal with given id
    //     const proposalDetails = await aaveGovHelper?.proposal(proposalId, AaveGovernanceV2);
    //     console.log(proposalDetails)
    //     setProposalDetails(proposalDetails);
    //     if (proposalDetails) console.log(proposalDetails)

    //   } catch (err) {
    //     console.error(err);
    //   }
    // }


    return (
      <div style={{marginRight: '16px'}}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            if (!provider) {
              loadWeb3Modal();
            } else {
              logoutOfWeb3Modal();
            }
          }}
        >
          {rendered === "" && "Connect Wallet"}
          {rendered !== "" && " disconnect from: " + rendered}
        </Button>
      </div>
    );
  }

  return (
    <>
      <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
    </>
  );
}

export default ConnectWallet;
