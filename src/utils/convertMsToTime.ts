export const convertMsToTime = (timeInMs: number) => {
  const minutes = Math.floor(timeInMs / 60_000);
  const seconds = ((timeInMs % 60_000) / 1000).toFixed(0);
  return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
};
