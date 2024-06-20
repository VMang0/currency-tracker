import { ChangeEvent, memo, useState } from 'react';

import {
  DropdownItem,
  DropdownList,
  DropdownStyled,
  SearchIconStyled,
  StyledInput,
  StyledInputWrapper,
} from '@components/SearchInput/styled';

type HandleChangeQueryType = <T>(value: T, inputType?: string) => void;

export const CurrencySearch = memo(({ filteredOptions = [], setSearchQuery }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangeQuery: HandleChangeQueryType = (value, inputType = 'input') => {
    if (!isListOpen) setIsListOpen(true);
    const newValue = inputType === 'input' ? (value as ChangeEvent<HTMLInputElement>).target.value : (value as string);
    setSearchTerm(newValue);
    setSearchQuery(newValue);
    if (inputType === 'dropdown') setIsListOpen(false);
  };

  const handleBlur = () => setIsListOpen(false);
  const preventEvent = (e: ChangeEvent<HTMLInputElement>) => e.preventDefault();

  return (
    <DropdownStyled>
      <StyledInputWrapper>
        <StyledInput
          type="text"
          placeholder="Currency search..."
          maxLength={30}
          value={searchTerm}
          onBlur={handleBlur}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeQuery(e, 'input')}
        />
        <SearchIconStyled />
      </StyledInputWrapper>
      {isListOpen && (
        <DropdownList>
          {filteredOptions.map(({ value, label }) => (
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
    </DropdownStyled>
  );
});

CurrencySearch.displayName = 'CurrencySearch';
