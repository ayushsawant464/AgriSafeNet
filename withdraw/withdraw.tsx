import * as React from "react";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useAccount,
  useWriteContract,
} from "wagmi";
import { abi } from "./abi";
import { parseEther, parseUnits } from "ethers";
export function Withdraw() {
  const { address } = useAccount();
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const input = "0.01";
    writeContract({
      address: "0x0728fdF35A89f58B64DA3885c114Ea74dE5F6160",
      abi,
      functionName: "transferClaims",
      args: [address, parseEther(input), BigInt(1)],
      value: parseEther(input),
      account: address,
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <form onSubmit={submit}>
      <button
        disabled={isPending}
        type="submit"
        style={{
          backgroundColor: "#4caf50",
          marginTop: "20px",
          padding: "10px",
          fontWeight: "bold",
          borderRadius: "12px",
          color: "white",
        }}
      >
        {isPending ? "Confirming..." : "Withdraw"}
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && (
        <div>
          <div>Transaction confirmed.</div>
        </div>
      )}
      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </form>
  );
}
