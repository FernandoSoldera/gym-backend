import { User } from "../entity/User";

export class PhysicalEvaluationRequest {
  constructor(weight: number, chest: number, abdominal: number, thigh: number, tricep: number, subscapular: number, suprailiac: number, midaxillary: number, arm: number, forearm: number, chestPerimeter: number, waist: number, hip: number, leg: number, calf: number) {
    this.weight = weight;
    this.chest = chest;
    this.abdominal = abdominal;
    this.thigh = thigh;
    this.tricep = tricep;
    this.subscapular = subscapular;
    this.suprailiac = suprailiac;
    this.midaxillary = midaxillary;
    this.arm = arm;
    this.forearm = forearm;
    this.chestPerimeter = chestPerimeter;
    this.waist = waist;
    this.hip = hip;
    this.leg = leg;
    this.calf = calf;
  }

  weight: number;
  chest: number;
  abdominal: number;
  thigh: number;
  tricep: number;
  subscapular: number;
  suprailiac: number;
  midaxillary: number;
  arm: number;
  forearm: number;
  chestPerimeter: number;
  waist: number;
  hip: number;
  leg: number;
  calf: number;
}