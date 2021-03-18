import { FC } from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Form, FormContainer } from './styles';

export const Sign: FC = () => (
  <Container>
    <FormContainer>
      <img src={logoImg} alt="Gym Point" />
      <Form>
        <input type="text" placeholder="nome" />
        <input type="text" placeholder="e-mail" />
        <button type="submit">Cadastrar</button>
      </Form>
    </FormContainer>
  </Container>
);
