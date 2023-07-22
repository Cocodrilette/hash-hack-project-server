import { contractConstants } from "../constants/contract";
import { provider } from "../constants/provider";
import { ControllerComunicator } from "../communicators/Controller.communicator";
import express from "express";

export async function commitmentsController(
  _: express.Request,
  res: express.Response
) {
  const controllerComunicator = ControllerComunicator.getInstance(
    contractConstants.address,
    contractConstants.abi,
    provider
  );

  let commitments = await controllerComunicator.getCommitments();

  if (commitments.length > 0) {
    commitments = commitments.map((commitment) => {
      return {
        hash: commitment[0],
        revealed: commitment[1],
        blockNumber: parseInt(commitment[2]),
      };
    });
  } else {
    commitments = [];
  }

  res.json({ commitments });
}
