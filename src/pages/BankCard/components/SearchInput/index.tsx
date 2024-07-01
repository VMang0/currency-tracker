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

type HandleChangeQueryType = <T>(value: T, inputType?: string) => void;

export const CurrencySearch = () => {
  const dispatch = useAppDispatch();
  const filteredOptions: CurrencyDataType[] = useSelector(filteredOptionsSelector);
  const searchQuery: string = useSelector(searchQuerySelector);
  const [isListOpen, setIsListOpen] = useState(false);

  const handleChangeQuery: HandleChangeQueryType = (value, inputType = 'input') => {
    if (!isListOpen) setIsListOpen(true);
    const newValue = inputType === 'input' ? (value as ChangeEvent<HTMLInputElement>).target.value : (value as string);
    if (inputType === 'dropdown') setIsListOpen(false);
    dispatch(setSearchQuery(newValue));
  };

  const handleBlur = () => setIsListOpen(false);
  const preventEvent = (e: MouseEvent<HTMLLIElement>) => e.preventDefault();

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
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeQuery(e, 'input')}
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
              onClick={() => handleChangeQuery(label, 'dropdown')}
            >
              {label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Dropdown>
  );
};
