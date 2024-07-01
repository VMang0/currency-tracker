import { FC, useState } from 'react';

import { Arrow, SelectInput, SelectList, SelectListItem, SelectWrapper } from '@components/Select/styled';
import { OptionType, SelectPropsType } from '@components/Select/types';

import { DATA_TEST_ID } from '../../../cypress/e2e/data';

export const Select: FC<SelectPropsType> = ({ options, setChooseItem, initialOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialOption);

  const toggleOptions = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (item: OptionType) => {
    setChooseItem(item.value);
    setSelectedOption(item);
    setIsOpen(false);
  };

  return (
    <SelectWrapper data-test-id={DATA_TEST_ID.SELECT}>
      <SelectInput isOpen={isOpen} onClick={toggleOptions} data-test-id={DATA_TEST_ID.SELECT_INPUT}>
        {selectedOption.label}
        <Arrow />
      </SelectInput>
      {isOpen && (
        <SelectList data-test-id={DATA_TEST_ID.SELECT_LIST}>
          {options.map((option) => (
            <SelectListItem
              key={option.value}
              onClick={() => handleOptionClick(option)}
              data-test-id={`select-item-${option.value}`}
            >
              {option.label}
            </SelectListItem>
          ))}
        </SelectList>
      )}
    </SelectWrapper>
  );
};
