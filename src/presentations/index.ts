import { tacoDoughnut } from "./taco-doughnut";
import { aiPower } from "./ai-power";
import { hotDogSandwich } from "./hotdog-sandwhich";
import { areFartsFunny } from "./are-farts-funny";
import { catsVdogs } from "./catsVdogs";
import { iPhoneVAndroid } from "./iPhoneVAndroid";
import { peanutButterPickles } from "./peanutButterPickles";
import { poolWater } from "./poolWater";
import { hairLegos } from "./hairLegos";
import { hollowMoon } from "./hollowMoon";
import { mouseInvation } from "./mouseInvation";
import { secondhandToothbrushes } from "./secondhandToothbrushes";
import { cursedMagicItems } from "./cursedMagicItems";
import { PizzaHelpDesk } from "./PizzaHelpDesk";
import { hotdogEarth } from "./hotdogEarth";
import { santaIsReal } from "./santa-is-real";
import { birdsRobots } from "./birds-robots";
import { bigfoot } from "./bigfoot";
import { catLasagna } from "./cat-lasagna";
import { minivan } from "./minivan";

const presentations: Deck[] = [
  hotDogSandwich,
  tacoDoughnut,
  aiPower,
  areFartsFunny,
  catsVdogs,
  iPhoneVAndroid,
  peanutButterPickles,
  poolWater,
  hairLegos,
  hollowMoon,
  mouseInvation,
  secondhandToothbrushes,
  cursedMagicItems,
  PizzaHelpDesk,
  hotdogEarth,
  santaIsReal,
  birdsRobots,
  bigfoot,
  catLasagna,
];

export default presentations;

export type Slide = {
  slideNumber: string | number;
  title: string;
  subTitle: string;
  copy?: string;
  imgPrompt?: string;
  img?: string;
  imgName?: string;
  imgDir?: string;
};

export type Deck = Slide[];
