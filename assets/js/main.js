import "../scss/styles.scss";

const func = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000);
  });
};
