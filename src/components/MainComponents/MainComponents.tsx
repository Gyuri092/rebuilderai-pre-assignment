import { Header } from '@components/Header/Header';
import { css } from '@emotion/react';

export const MainComponents = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 150vh;
        background: #000;
      `}
    >
      <div
        css={css`
          background: #000;
          color: #fff;
        `}
      >
        <Header />
      </div>
    </div>
  );
};
