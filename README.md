# yarn --version

1.22.19

# テンプレート作成コマンド

- yarn create vite

  - project-name: vite-sample2
  - React
  - Typescript

- yarn install

# ESLint 導入

- yarn add -D eslint
- npm init @eslint/config
  - To check syntax, find problems, and enforce code style
  - JavaScript modules (import/export)
  - React
  - TypeScript
  - Browser
  - Use a popular style guide
  - Standard
  - JSON

Would you like to install them now? · No

- yarn add -D eslint-plugin-react@latest eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^5.0.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 typescript@\*

- yarn add -D eslint-plugin-react-hooks

# Pretteir 導入

- yarn add -D prettier
- yarn add -D eslint-config-prettier

# ESLint と Prettier の設定ファイル編集

.eslintrc.json
tsconfig.eslint.json
.eslintignore
.prettierrc.yml

# Jest 導入

yarn add -D jest @types/jest ts-jest
yarn add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event @testing-library/react-hooks
yarn add -D jest-environment-jsdom
yarn add -D eslint-plugin-jest eslint-plugin-jest-dom eslint-plugin-testing-library

# Jest 設定

jest.config.json
jest.setup.ts
