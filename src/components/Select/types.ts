export type OptionType = {
  value: string;
  label: string;
};

export type SelectPropsType = {
  options: OptionType[];
  setChooseItem: (value: string) => void;
  initialOption: OptionType;
};
