import { ethers } from "ethers";

import { Commitment } from "./../types/commitment.type";
import { Reveal } from "../types/reveal.type";
import { signer } from "../constants/signer";

export class ControllerComunicator {
  private static instance: ControllerComunicator;
  controller: ethers.BaseContract;

  private constructor(address: string, abi: string | string[], provider: any) {
    this.controller = new ethers.Contract(address, abi, provider).connect(
      signer
    );
  }

  public static getInstance(
    address: string,
    abi: any,
    provider: ethers.JsonRpcProvider
  ): ControllerComunicator {
    if (!ControllerComunicator.instance) {
      ControllerComunicator.instance = new ControllerComunicator(
        address,
        abi,
        provider
      );
    }

    return ControllerComunicator.instance;
  }

  public async commit(commitment: Commitment) {
    // @ts-ignore
    const tx = await this.controller.commit(commitment.hash);
    const receipt = await tx.wait();

    return receipt;
  }

  public async reveal(reveal: Reveal) {
    // @ts-ignore
    const tx = await this.controller.reveal(
      reveal.tickerSymbol,
      reveal.orderType,
      reveal.accountType,
      reveal.quantity,
      reveal.price,
      reveal.timeInForce,
      reveal.direction
    );
    const receipt = await tx.wait();

    return receipt;
  }

  public async getReveals() {
    const hashes = await this._getHashes();

    if (hashes.length === 0) return [];

    const reveals = [];

    for (let i = 0; i < hashes.length; i++) {
      // @ts-ignore
      const reveal = await this.controller.reveals(hashes[i]);
      console.log({ reveal });

      if (reveal) reveals.push(reveal);
    }

    if (reveals.length > 0) {
      return reveals;
    } else {
      return [];
    }
  }

  public async getCommitments() {
    const hashes = await this._getHashes();

    if (hashes.length === 0) return [];

    const commitments = [];

    for (let i = 0; i < hashes.length; i++) {
      // @ts-ignore
      const commitment = await this.controller.commitments(hashes[i]);
      console.log({ commitment });

      if (commitment) commitments.push(commitment);
    }

    if (commitments.length > 0) {
      return commitments;
    } else {
      return [];
    }
  }

  private async _getHashes() {
    // @ts-ignore
    const hashes = await this.controller.getHashes();
    console.log({ hashes });

    if (hashes.length > 0) {
      return hashes;
    } else {
      return [];
    }
  }
}
