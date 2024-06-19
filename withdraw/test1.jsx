import { abi } from "./abi.abi.json";
import { writeContract } from "@wagmi/core";
import { parseEther } from "viem";
import { config } from "./config";

let name = "event";
let seatType = "front";
let tickets = 12;
let price = 1400;
let date = 19122025;

const create = await writeContract(config, {
  abi,
  address: "0x813a632A0dE5f0B56CD7Cfc6fbEA3Cc626Ee3451",
  functionName: "createEvent",
  args: [
    name,
    utils.arrayify(price),
    utils.arrayify(tickets),
    utils.arrayify(seatType),
    date,
  ],
  value: "",
  account: "",
});
