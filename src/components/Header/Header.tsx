import logoIcon from '@assets/icons/logo.svg';
import { Menu } from '@components/Header/Menu/Menu';
import { TranslateIcon } from '@components/Header/TranslateIcon/TranslateIcon';
import { css } from '@emotion/react';

export const Header = () => {
  return (
    <div
      css={css`
        width: 100%;
        padding: 0px 30px;
        font-size: 20px;
        span {
          cursor: pointer;
        }
      `}
    >
      <div
        css={css`
          height: 94px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <div
          css={css`
            display: block;
            width: 140px;
            cursor: pointer;
          `}
        >
          <img src={logoIcon} alt="rebuilderai-logo" />
        </div>
        <Menu />
        <TranslateIcon />
      </div>
    </div>
  );
};
