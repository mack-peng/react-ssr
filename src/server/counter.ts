export const fetchCountApi = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 2000);
  });
};
