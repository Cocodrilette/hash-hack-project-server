import { ControllerComunicator } from "../communicators/Controller.communicator";
import { contractConstants } from "../constants/contract";
import { provider } from "../constants/provider";
import { Reveal } from "./../types/reveal.type";

export async function revealResponder(reveal: Reveal) {
  const controllerComunicator = ControllerComunicator.getInstance(
    contractConstants.address,
    contractConstants.abi,
    provider
  );

  const receipt = await controllerComunicator.reveal(reveal);

  console.log({ revealHash: receipt.hash });
}
