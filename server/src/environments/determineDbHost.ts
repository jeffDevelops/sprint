export default (): (string | Error) => {
  switch (process.env.NODE_ENV) {
    case "staging": throw new Error("Staging env not configured for MongoDB");
    case "production": throw new Error("Production environment not configured for MongoDB");
    default: return "mongodb://localhost:27017/sprint";
  }
};
