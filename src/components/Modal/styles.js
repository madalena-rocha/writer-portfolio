import styled from "styled-components";

export const Container = styled.div`
  width: calc(80% - 19.68rem);
  display: flex;
  gap: 2.4rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--tertiary-color);
  padding: 2.4rem;
  border-radius: 8px;

  > img {
    width: 20rem;
    height: 32rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;

    svg {
      position: absolute;
      top: 2.4rem;
      right: 2.4rem;
    }

    a {
      width: fit-content;
      padding: 1rem 1.6rem;
      border-radius: 8px;
      background-color: var(--primary-color);
    }
  }
`;