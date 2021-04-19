# Strap Up 🚀

An opinionated setup for prettier, eslint and husky to get your projects boot(strap)ped as quickly as possible.

## Todo

- [ ] Copy config files from `configs/react/...` to root of project
- [ ] Run install for packages below (maybe add a packages.json file for each config)
    ```
  "eslint-config-prettier",
  "eslint-plugin-security",
  "husky",
  "lint-staged",
  "prettier"
  ```
- [ ] Add husky and lint-staged integration
- [ ] Check if a `package.json` file exists to ensure that the command is run in the root
- [ ] Check if the config files exist already so that we don't overwrite them - stop the process