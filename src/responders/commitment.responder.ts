import { Server } from "ws";
import { ControllerComunicator } from "../communicators/Controller.communicator";
import { contractConstants } from "../constants/contract";
import { provider } from "../constants/provider";
import { Commitment } from "../types/commitment.type";

export async function commitmentResponder(commitment: Commitment) {
  const controllerComunicator = ControllerComunicator.getInstance(
    contractConstants.address,
    contractConstants.abi,
    provider
  );

  const receipt = await controllerComunicator.commit(commitment);

  console.log({ commitmentHash: receipt.hash });
}
