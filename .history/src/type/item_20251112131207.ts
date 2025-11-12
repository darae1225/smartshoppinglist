export type item = {
  id: string;
  text: string;
  status: string;
  groceryCategory: string;
  dealOption: string;
};

export type dealOptions = "Essentials" | "Wait for deals" | "";
