import defaultConfig from "@tamagui/config/v3"
import { createTamagui } from "tamagui"

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  themes: {
    ...defaultConfig.themes,
    // light_active: defaultConfig.themes.dark_green,
  },
})

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
