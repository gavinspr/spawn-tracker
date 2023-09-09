import { Image } from "react-native";
import { CultureSubstrate } from "../@types";

export type SubstrateListItemType = {
  name: CultureSubstrate;
  icon: JSX.Element;
};

export const CULTURE_SUBSTRATE_LIST: Array<SubstrateListItemType> = [
  {
    name: "liquid",
    icon: (
      <Image
        style={{ height: 50, width: 50 }}
        source={require("../assets/flask.png")}
      />
    ),
  },
  {
    name: "agar",
    icon: (
      <Image
        style={{ height: 50, width: 50 }}
        source={require("../assets/agar.png")}
      />
    ),
  },
  {
    name: "grain",
    icon: (
      <Image
        style={{ height: 50, width: 50 }}
        source={require("../assets/grain.png")}
      />
    ),
  },
];
