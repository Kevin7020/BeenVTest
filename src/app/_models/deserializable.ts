import { report } from ".";

export interface Deserializable {
  deserialize(input: any): report {
    Object.assign(this, input);
    this.report = new report().deserialize(input.car);
    return this;
  }