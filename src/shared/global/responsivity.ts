export const screen = {
  lg: "max-width: 1170px",
  lgMd: "max-width: 1070px",
  md: "max-width: 970px",
  mdSm: "max-width: 860px",
  sm: "max-width: 750px",
  smXs: "max-width: 675px",
  xs: "max-width: 500px",
}

export const screenWidth = (sizePx: number) => {
  return `max-width: ${sizePx}px`;
}