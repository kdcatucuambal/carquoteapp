export function getYearDifference(year: number): number {
  return new Date().getUTCFullYear() - year;
}

export function getIncreaseByMark(mark: string): number {
  let increase = 0;
  switch (mark) {
    case "european":
      increase = 1.3;
      break;
    case "american":
      increase = 1.15;
      break;
    case "asian":
      increase = 1.05;
      break;

    default:
      break;
  }
  return increase;
}

/**
 *Gets the value of the plan depending on the type plan
 * @param plan type of the plan selected
 * @return plan value
 */
export function getPlan(plan: string): number {
  return plan === "basic" ? 1.2 : 1.5;
}

export function capitalizeTheFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
