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

  #home {
    padding-top: 12.8rem;
  }

  #books, #news {
    background-color: ${({ theme }) => theme.COLORS.BRAND};
  }

  #books > div {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  #news {
    padding-bottom: 12.8rem;

    > a {
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.BRAND};
        transform: none;
      }
    }
  }

  @media (min-width: 768px) {
    #home {
      display: grid;
      grid-template-columns: 1fr 4fr;
      grid-template-areas:
        "profile presentation";
      grid-gap: 0 2.4rem;
    }

    #news {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2.4rem;
    }
  }

  @media (min-width: 1024px) {
    #home {
      grid-gap: 0 3.2rem;
    }

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
  grid-area: profile;

  width: 20rem;
  height: 32rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

export const Presentation = styled.div`
  grid-area: presentation;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;

  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;