import { useReadContract } from "wagmi";
import { abi } from "./abi.abi.json";
import { config } from "../config";

export function ReadContract() {
  const { data: output } = useReadContract({
    config,
    abi,
    address: "0x813a632A0dE5f0B56CD7Cfc6fbEA3Cc626Ee3451",
    functionName: "CustomerInfo",
    args: ["type", "count"],
    account: "0x626c4F102704aB03fcf55a129F2d677d7F740d7e", //our address
  });
  console.log(output);
  return;
}
