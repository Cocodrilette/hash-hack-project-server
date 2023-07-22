import { Commitment } from "./commitment.type";
import { Reveal } from "./reveal.type";

export interface Data {
  reveal: Reveal;
  commitment: Commitment;
}
