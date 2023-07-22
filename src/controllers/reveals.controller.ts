import { contractConstants } from "../constants/contract";
import { provider } from "../constants/provider";
import { ControllerComunicator } from "../communicators/Controller.communicator";
import express from "express";

export async function revealsController(
  _: express.Request,
  res: express.Response
) {
  const controllerComunicator = ControllerComunicator.getInstance(
    contractConstants.address,
    contractConstants.abi,
    provider
  );

  let reveals = await controllerComunicator.getReveals();
  console.log({ reveals });

  if (reveals.length > 0) {
    reveals = reveals.map((reveal) => {
      if (reveal[0] === "" || reveal[3] === BigInt(0)) return;

      return {
        tickerSymbol: reveal[0],
        orderType: reveal[1],
        accountType: reveal[2],
        quantity: parseInt(reveal[3]),
        price: parseInt(reveal[4]),
        timeInForce: parseInt(reveal[5]),
        direction: parseInt(reveal[6]),
      };
    });
  } else {
    reveals = [];
  }

  res.json({ reveals });
}
