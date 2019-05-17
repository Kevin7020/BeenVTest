import {names} from "./names";
import {jobs} from "./jobs";
import {emails} from "./emails";
import {social} from "./social";
import {Deserializable} from "./deserializable";

export class report implements Deserializable {
  id: number;
  names: string;
  jobs : jobs;
  emails : emails;
  social : social;

  deserialize(input: any) {
    Object.assign(this, input);
    this.names = new names().deserialize(input.names);
    return this;
  }
}