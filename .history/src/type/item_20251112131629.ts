export type Item = {
  id: string;
  text: string;
  status: string;
  groceryCategory: string;
  dealOption: string;
};

export type DealOptions = "Essentials" | "Wait for deals" | "";
