export type Item = {
  id: string;
  text: string;
  status: string;
  groceryCategory: string;
  dealOption: DealOption;
};

export type DealOption = "Essentials" | "Wait for deals" | "";
