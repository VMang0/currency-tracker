import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@hooks/useAppDispatch';
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  Input,
  InputWrapper,
  SearchIcon,
} from '@pages/BankCard/components/SearchInput/styled';
import { setSearchQuery } from '@redux/slices/banksSlice';
import { filteredOptionsSelector, searchQuerySelector } from '@redux/slices/banksSlice/selectors';
import { CurrencyDataType } from '@type/currency';

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const filteredOptions: CurrencyDataType[] = useSelector(filteredOptionsSelector);
  const searchQuery: string = useSelector(searchQuerySelector);
  const [isListOpen, setIsListOpen] = useState(false);

  const handleChangeQuery = (value: string, inputType: string = 'input'): void => {
    if (!isListOpen) setIsListOpen(true);
    if (inputType === 'dropdown') setIsListOpen(false);
    dispatch(setSearchQuery(value));
  };

  const handleBlur = () => setIsListOpen(false);
  const preventEvent = (e: MouseEvent<HTMLLIElement>) => e.preventDefault();

  const handleItemClick = (label: string) => () => handleChangeQuery(label, 'dropdown');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => handleChangeQuery(e.target.value, 'input');

  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(''));
      setIsListOpen(false);
    };
  }, [dispatch]);

  return (
    <Dropdown>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Currency search..."
          maxLength={30}
          value={searchQuery}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
        <SearchIcon />
      </InputWrapper>
      {isListOpen && (
        <DropdownList>
          {filteredOptions?.map(({ value, label }) => (
            <DropdownItem
              key={value}
              className="DropdownItem"
              onMouseDown={preventEvent}
              onClick={handleItemClick(label)}
            >
              {label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Dropdown>
  );
};
