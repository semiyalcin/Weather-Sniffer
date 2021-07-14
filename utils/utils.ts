// to evaluate sunrise and sunset time based on API response
export const unixToDate = (tick: number) => {
  return new Date(tick * 1000).toLocaleTimeString().slice(0, -3);
};
