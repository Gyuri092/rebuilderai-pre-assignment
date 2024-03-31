import { css } from '@emotion/react';

export const DetailMenu = () => {
  return (
    <div
      css={css`
        position: absolute;
        left: -70%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 460px;
        line-height: 94px;
        font-size: 18px;
      `}
    >
      <span>광원추론</span>
      <span>재질추론</span>
      <span>실측크기</span>
      <span>3D 공간 영상</span>
    </div>
  );
};
