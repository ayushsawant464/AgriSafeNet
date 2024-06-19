import { type BaseError, useReadContract } from "wagmi";
import { config } from "../config";
import { abi } from "../abi";
import { ethers } from "ethers";
import { formatUnits } from "ethers";
export function ReadContract() {
  const { data: balance } = useReadContract({
    config,
    abi,
    functionName: "checkContractBalance",
    address: "0x0728fdF35A89f58B64DA3885c114Ea74dE5F6160",
    args: [],
  });
  let blaa = balance?.toString() || "0";
  let bla = formatUnits(blaa, "ether");
  return <div>Balance: {bla?.toString()}</div>;
}

//
