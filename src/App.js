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
    width: 100%;
    position: relative;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  #home > div {
    flex-direction: column;
    align-items: center;
    
    margin-top: 3.2rem;
  }

  #books, #news {
    background-color: ${({ theme }) => theme.COLORS.BRAND};
  }

  #books > div, #tales > div {
    text-align: left;
  }

  #books > div > div {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  #news {
    padding-bottom: 12.8rem;
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
    border: 4px solid ${({ theme }) => theme.COLORS.BRAND};
    border-radius: 50%;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  margin-top: 2.4rem;
`;