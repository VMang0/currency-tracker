import { FC, useState } from 'react';

import {
  ArrowStyled,
  SelectInputStyled,
  SelectListItemStyled,
  SelectListStyled,
  SelectStyled,
} from '@components/Select/styled';

import { DATA_TEST_ID } from '../../../cypress/e2e/data.ts';

type OptionType = {
  value: string;
  label: string;
};

type SelectPropsType = {
  options: OptionType[];
  setChooseItem: () => void;
  initialOption: OptionType;
};

export const Select: FC<SelectPropsType> = ({ options, setChooseItem, initialOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialOption);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (item) => {
    setChooseItem(item.value);
    setSelectedOption(item);
    setIsOpen(false);
  };

  return (
    <SelectStyled data-test-id={DATA_TEST_ID.SELECT}>
      <SelectInputStyled $isOpen={isOpen} onClick={() => toggleOptions()} data-test-id={DATA_TEST_ID.SELECT_INPUT}>
        {selectedOption.label}
        <ArrowStyled $isOpen={isOpen} />
      </SelectInputStyled>
      {isOpen && (
        <SelectListStyled data-test-id={DATA_TEST_ID.SELECT_LIST}>
          {options.map((option) => (
            <SelectListItemStyled
              key={option.value}
              onClick={() => handleOptionClick(option)}
              data-test-id={`select-item-${option.value}`}
            >
              {option.label}
            </SelectListItemStyled>
          ))}
        </SelectListStyled>
      )}
    </SelectStyled>
  );
};
