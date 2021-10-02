import { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Contract } from "@ethersproject/contracts";
import { getDefaultProvider } from "@ethersproject/providers";

import { addresses, abis } from "@project/contracts";
import { ethers, Signer } from "ethers";



import { StyledButton, } from "../styled-components";
import useWeb3Modal from "../hooks/useWeb3Modal";
import GET_TRANSFERS from "../graphql/get-transfers";

async function readOnChainData() {
  // Should replace with the end-user wallet, e.g. Metamask
  const defaultProvider = getDefaultProvider();
  // Create an instance of an ethers.js Contract
  // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
  const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
  // A pre-defined address that owns some CEAERC20 tokens
  const tokenBalance = await ceaErc20.balanceOf("0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C");
  console.log({ tokenBalance: tokenBalance.toString() });
}

const ConnectWallet = () => {
  const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers });
    }
  }, [loading, error, data]);

  // @ts-ignore
  function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
    const [account, setAccount] = useState("");
    const [signer, setSigner] = useState<any>({});
    const [rendered, setRendered] = useState("");
    const [proposalDetails, setProposalDetails] = useState<any>({});

    useEffect(() => {
      async function fetchAccount() {
        try {
          if (!provider) {
            return;
          }
          // Load the user's accounts.
          const accounts = await provider.listAccounts();
          const signer = await provider.getSigner(0);

          setAccount(accounts[0]);
          setSigner(signer);

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


    // const testConnectToAave = async () => {
    //   try {
    //     if (!provider) {
    //       return;
    //     }
    //     const balanceTest = await provider.getTransactionCount("0xEC568fffba86c094cf06b22134B23074DFE2252c")
    //     // const formattedBalance = ethers.utils.formatEther(balanceTest);
    //     // "0x8a2Efd9A790199F4c94c6effE210fce0B4724f52"

    //     const contract = new ethers.Contract(
    //       "0x8a2Efd9A790199F4c94c6effE210fce0B4724f52",
    //       abis.erc20,
    //       provider.getSigner(0),
    //     )
    //     console.log(contract)
    //     // )
    //     let eventFilter = contract.filters.Approval()
    //     console.log(eventFilter, " eventFilter")
    //     // let events = await contract.queryFilter(eventFilter)
    //     const filter = {
    //       address: "0x8a2Efd9A790199F4c94c6effE210fce0B4724f52",
    //       topics: [
    //         // the name of the event, parnetheses containing the data type of each event, no spaces
    //         "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
    //       ]
    //     }
    //     const test = async () => provider.on(eventFilter, (res: any) => {
    //       console.log(res, 'res')
    //     })
    //     test()
    //     if (balanceTest) {
    //       setBlanace(balanceTest);

    //       console.log(balanceTest)
    //     } else {
    //       console.log(balanceTest)
    //       setBlanace(balanceTest);

    //     }
    //   } catch (err) {
    //     setBlanace("");
    //     console.error(err);
    //   }
    // }

     const testConnectToAave = async () => {
      try {
        if (!provider) {
          return;
        }

        const aaveGovHelper = new ethers.Contract(
          "0x16ff7583ea21055bf5f929ec4b896d997ff35847", // GovernanceV2Helper address
          abis.erc20,
          signer,
        );
        const AaveGovernanceV2 = "0xEC568fffba86c094cf06b22134B23074DFE2252c";
        const proposalId = 25;

        // Get details of proposal with given id
        const proposalDetails = await aaveGovHelper.proposal(proposalId, AaveGovernanceV2);
        setProposalDetails(proposalDetails);
        if (proposalDetails) console.log(proposalDetails)

      } catch (err) {
        console.error(err);
      }
    }


    return (
      <>
        <StyledButton
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
        </StyledButton>
        <StyledButton onClick={() => {
          testConnectToAave();
        }}>console.log</StyledButton>
      </>
    );
  }

  return (
    <>
      <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
      <StyledButton onClick={() => readOnChainData()}>
        Read On-Chain Balance
      </StyledButton>
    </>
  );
}

export default ConnectWallet;
