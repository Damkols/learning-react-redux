import { BUY_CAKE } from "./cakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "buy cake at the cake shop",
  };
};
