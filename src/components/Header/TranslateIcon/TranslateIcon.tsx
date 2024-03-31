import translateIcon from '@assets/icons/translateIcon.svg';
import { css } from '@emotion/react';
import { useState } from 'react';

export const TranslateIcon = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      css={css`
        position: relative;
        width: 30px;
        height: 30px;
      `}
    >
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
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => {
          if (!isMouseOver) {
            setIsMouseOver(false);
          }
        }}
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
      {isMouseOver && (
        <div
          css={css`
            position: absolute;
            left: -80%;
            top: 140%;
            display: flex;
            line-height: 30px;
            flex-direction: column;
            width: 80px;
            height: 110px;
            border-radius: 5px;
            background: #fff;
            /* box-shadow: 5px 5px 10px #6f757b; */
            color: #6f757b;
            padding: 10px 0;
            span {
              margin: 5px 0;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 16px;
              font-weight: 600;
              :hover {
                background: #f6f7f8;
              }
            }
          `}
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          <span>KOR</span>
          <span>ENG</span>
        </div>
      )}
    </div>
  );
};
