const secInMs = 1000;
const minInMs = 60 * secInMs;
const hourInMs = 60 * minInMs;
const dayInMs = 24 * hourInMs;

// TODO: check env to not be undefined
const env = {
  port: process.env.PORT,
  pathPrefix: process.env.PATH_PREFIX,
  jwt: {
    secret: process.env.JWT_SECRET,
    expInMs: parseInt(process.env.JWT_EXP_IN_DAY as string, 10) * dayInMs,
  },
};

export default env;
