module.exports = {
  "root": true,
  "env": { "browser": true, "node": true },
  "ignorePatterns": [
    "node_modules",
    "dist",
    "build",
    "public",
    ".eslintrc.cjs"
  ],
  "extends": [
    "next/core-web-vitals",
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["react-refresh", "@typescript-eslint", "simple-import-sort"],
  "rules": {
    "react-refresh/only-export-components": [
      "warn",
      { "allowConstantExport": true }
    ],
    // import
    // .js, .jsx, .ts, .tsx는 임포트 시 확장자 생략
    "import/extensions": [
      "error",
      "always",
      {
        "ignorePackages": true,
        "pattern": {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
      }
    ],
    // jsx 문법을 .tsx 파일에서도 허용
    "react/jsx-filename-extension": [
      "error",
      { "extensions": [".jsx", ".tsx"] }
    ],
    // console.log 찾기 쉽게 경고로 표시
    "no-console": "warn",
    // React import문 생략
    "react/react-in-jsx-scope": "off",
    // 파일에서 하나의 코드만 내보낼 때 export default를 사용하게 하는 규칙 off
    "import/prefer-default-export": "off",
    // 화살표 함수 허용
    "react/function-component-definition": [
      2,
      { "namedComponents": ["arrow-function", "function-declaration"] }
    ],
    // 구조분해할당 강제하는 규칙 off
    "react/destructuring-assignment": "off",
    // props 무조건 1개 이상 존재해야 하는 규칙 off
    "react/require-default-props": "off",
    "react-hooks/rules-of-hooks": "error",
    // Recoil 사용 시 종속성 에러 발견해줌
    // "react-hooks/exhaustive-deps": [
    //   "warn",
    //   {
    //     "additionalHooks": "useRecoilCallback"
    //   }
    // ],
    // airbnb config에서 htmlFor와 nesting을 모두 사용하도록 강제하는 세팅 비활성화
    "jsx-a11y/label-has-associated-control": ["error", {}],
    // redux-toolkit 사용 시 props로 받은 state를 immer를 통해 업데이트 하므로 재할당 관련 에러 off
    "no-param-reassign": [
      "error",
      { "props": true, "ignorePropertyModificationsFor": ["state"] }
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": "**/tsconfig.json"
      },
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".svg"]
      }
    }
  }
};
