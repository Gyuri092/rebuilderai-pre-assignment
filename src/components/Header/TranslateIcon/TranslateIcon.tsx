import translateIcon from '@assets/icons/translateIcon.svg';
import { css } from '@emotion/react';

export const TranslateIcon = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        cursor: pointer;
        border-radius: 5px;
        :hover {
          background: #fff;
          img {
            filter: invert(40%);
          }
        }
      `}
    >
      <img
        src={translateIcon}
        alt="translateIcon"
        css={css`
          width: 20px;
          height: 20px;
          filter: invert(100%);
        `}
      />
    </div>
  );
};
