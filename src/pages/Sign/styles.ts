import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0 0.25rem;
  background: var(--red);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 28rem;
  width: 22rem;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background: var(--shape);

  img {
    height: 6.25rem;
    width: 9.5rem;
    margin-top: 3.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  margin-top: 2rem;

  input {
    padding: 0.8rem;
    border: 1px solid var(--border);
    border-radius: 0.25rem;

    &:placeholder {
      color: var(--button-color);
    }
  }

  input + input {
    margin-top: 2rem;
  }

  button {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;
    padding: 1rem 0;
    border: none;
    border-radius: 0.25rem;
    background: var(--red);
    color: var(--shape);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
