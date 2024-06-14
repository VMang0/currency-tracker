import { useState } from 'react';

import {
  ArrowStyled,
  SelectInputStyled,
  SelectListItemStyled,
  SelectListStyled,
  SelectStyled,
} from '@components/Select/styled';

export const Select = ({ options, setChooseItem, initialOption }) => {
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
    <SelectStyled>
      <SelectInputStyled $isOpen={isOpen} onClick={() => toggleOptions()}>
        {selectedOption.label}
        <ArrowStyled $isOpen={isOpen} />
      </SelectInputStyled>
      {isOpen && (
        <SelectListStyled>
          {options.map((option) => (
            <SelectListItemStyled key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </SelectListItemStyled>
          ))}
        </SelectListStyled>
      )}
    </SelectStyled>
  );
};
