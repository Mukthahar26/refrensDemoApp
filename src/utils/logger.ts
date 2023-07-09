// This function execute console.log only in dev environment. But it will disable in production.
const logger = {
  log: __DEV__ ? console.log : () => {},
  error: __DEV__ ? console.error : () => {},
};

export default logger;
