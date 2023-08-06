import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 9.4rem auto 9.4rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    padding-inline: 12.3rem;

    background-color: var(--secondary-color);
    color: var(--primary-color);
  }

  section:last-of-type {
    margin-bottom: 3.2rem;
  }
`;

export const About = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin-top: 3.2rem;

  > p {
    width: 80%;
    margin-top: 2.4rem;
  }
`;

export const Profile = styled.div`
  width: 20rem;
  height: 20rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;

    padding: 3.7px;
    border: 4px solid var(--tertiary-color);
    border-radius: 50%;
  }
`;