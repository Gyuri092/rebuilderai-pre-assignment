import { DetailMenu } from '@components/Header/DetailMenu/DetailMenu';
import { css } from '@emotion/react';
import { useState } from 'react';

export const Menu = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 40%;
        line-height: 94px;
        span {
          width: auto;
          font-weight: 500;
          position: relative;
          &:hover {
            &:after {
              content: '';
              position: absolute;
              left: 0;
              bottom: 30px;
              width: 100%;
              height: 2px;
              background-color: #173dfe;
              animation: fadeInBorder 0.5s forwards;
            }
          }
        }
        @keyframes fadeInBorder {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}
    >
      <span>Service</span>
      <span
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        css={css`
          position: relative;
        `}
      >
        Technology
        {isMouseOver && <DetailMenu />}
      </span>
      <span>About</span>
      <span>Contact</span>
    </div>
  );
};
