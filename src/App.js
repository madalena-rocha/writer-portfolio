import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10.8rem auto 10.8rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    width: 100%;
    padding-inline: 2.8rem;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  #books > div, #tales > div {
    text-align: left;
  }

  section:last-of-type {
    margin-bottom: 3.2rem;
  }

  @media (min-width: 1024px) {
    > main {
      padding-inline: 12.3rem;
    }
  }
`;

export const About = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin-top: 3.2rem;
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
    border: 4px solid ${({ theme }) => theme.COLORS.BRAND};
    border-radius: 50%;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 80%;
  margin-top: 2.4rem;
`;