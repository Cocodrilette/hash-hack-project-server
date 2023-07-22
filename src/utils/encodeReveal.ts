import { Reveal } from "../types/reveal.type";
import { abiCoder, keccak256 } from "./solidity";

export function encodeReveal(reveal: Reveal): string {
  const hash = keccak256(
    abiCoder.encode(
      ["string", "string", "string", "uint", "uint", "uint", "uint"],
      [
        reveal.tickerSymbol,
        reveal.orderType,
        reveal.accountType,
        reveal.quantity,
        reveal.price,
        reveal.timeInForce,
        reveal.direction,
      ]
    )
  );

  return hash;
}
