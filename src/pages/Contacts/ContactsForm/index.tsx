import React, { useState } from 'react';

import { FormContainer, StyledForm, Input, Textarea, Label, Button } from '@pages/Contacts/ContactsForm/styled';
import { sendComment } from '@redux/actions/comment';

export const ContactsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await sendComment({ name, email, comment });
    setIsLoading(false);
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name:
          <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Label>
        <Label htmlFor="email">
          Email:
          <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Label>
        <Label htmlFor="comment">
          Comment:
          <Textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} required />
        </Label>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
      </StyledForm>
    </FormContainer>
  );
};
