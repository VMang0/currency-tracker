import React, { ChangeEvent, FormEvent, useState } from 'react';

import { sendComment } from '@api/comment/sendComment';
import { FormContainer, Input, Textarea, Label, Button, Form } from '@components/forms/ContactsForm/styled';
import { FormStateType } from '@components/forms/ContactsForm/types';
import notificationService from '@services/notification';

export const ContactsForm = () => {
  const [formState, setFormState] = useState<FormStateType>({
    isLoading: false,
    name: '',
    email: '',
    comment: '',
  });

  const handleValueChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSendComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState((prevState) => ({ ...prevState, isLoading: true }));
    try {
      await sendComment({ name: formState.name, email: formState.email, comment: formState.comment });
      notificationService.notify('Your message has been sent!');
    } catch (e) {
      notificationService.notify('Something went wrong!');
    } finally {
      setFormState({ isLoading: false, name: '', email: '', comment: '' });
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSendComment}>
        <Label htmlFor="name">
          Name:
          <Input type="text" id="name" value={formState.name} onChange={handleValueChange} required />
        </Label>
        <Label htmlFor="email">
          Email:
          <Input type="email" id="email" value={formState.email} onChange={handleValueChange} required />
        </Label>
        <Label htmlFor="comment">
          Comment:
          <Textarea id="comment" value={formState.comment} onChange={handleValueChange} required />
        </Label>
        <Button type="submit" disabled={formState.isLoading}>
          {formState.isLoading ? 'Loading...' : 'Send'}
        </Button>
      </Form>
    </FormContainer>
  );
};
