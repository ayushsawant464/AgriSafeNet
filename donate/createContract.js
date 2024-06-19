import { abi } from "./abi.abi.json";
import { writeContract } from "@wagmi/core";
import { parseEther } from "viem";
import { config } from "./config";

const create = await writeContract(config, {
  abi,
  address: "0x813a632A0dE5f0B56CD7Cfc6fbEA3Cc626Ee3451",
  functionName: "createEvent",
  args: [],
  value: "",
  account: "",
});

const discard = await writeContract(config, {
  abi,
  address: "0x813a632A0dE5f0B56CD7Cfc6fbEA3Cc626Ee3451",
  functionName: "discardEvent",
  args: [],
  value: "",
  account: "",
});

const deleteEvent = await writeContract(config, {
  abi,
  address: "0x813a632A0dE5f0B56CD7Cfc6fbEA3Cc626Ee3451",
  functionName: "deleteEvent",
  args: [],
  value: "",
  account: "",
});

const buyTickets = await writeContract(config, {
  abi,
  address: "0x813a632A0dE5f0B56CD7Cfc6fbEA3Cc626Ee3451",
  functionName: "buyTickets",
  args: [],
  value: "",
  account: "",
});

const selltoOwner = await writeContract(config, {
  abi,
  address: "0x813a632A0dE5f0B56CD7Cfc6fbEA3Cc626Ee3451",
  functionName: "sellToOwner",
  args: [],
  value: "",
  account: "",
});

const withdraw = await writeContract(config, {
  abi,
  address: "0x813a632A0dE5f0B56CD7Cfc6fbEA3Cc626Ee3451",
  functionName: "withdraw",
  args: [amount],
  value: parseEther(amount),
  account: "",
});
