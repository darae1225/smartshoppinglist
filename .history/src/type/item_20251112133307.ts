import type { Dispatch, SetStateAction } from "react";
import type { ChangeEvent } from "react";

export type Item = {
  id: string;
  text: string;
  status: string;
  groceryCategory: string;
  dealOption: DealOption;
};

export type DealOption = "Essentials" | "Wait for deals" | "";

export type SetDealOption = Dispatch<SetStateAction<DealOption>>;

export type ChangeEvent = ChangeEvent<HTMLInputElement>;
