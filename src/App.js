import styled, { keyframes } from "styled-components";

export const animation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

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

    > section > div,
    > section > a {
      animation: ${animation} 1s ease forwards;
    }
  }

  #home {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h2 {
      display: none;
    }
  }

  #home, #tales {
    background-color: ${({ theme }) => theme.COLORS.BRAND};
  }

  #tales > div {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  #news {
    padding-bottom: 12.8rem;

    > a {
      width: 100%;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (min-width: 768px) {
    #news {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2.4rem;
    }
  }

  @media (min-width: 1024px) {
    #news {
      grid-gap: 3.2rem;
    }
  }

  @media (min-width: 1200px) {
    #tales {
      grid-template-areas:
        "book1 title"
        "book2 book3";
    }

    #tales > h2 {
      grid-area: title;
    }
  }
`;

export const Profile = styled.div`
  display: flex;

  > img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    object-position: top;

    padding: 3px;
    border: 3px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 50%;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;

  text-align: center;
  padding-inline: 2.4rem;
`;