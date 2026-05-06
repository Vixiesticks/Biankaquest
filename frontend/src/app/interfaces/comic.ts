import { Panel } from "../components/panel/panel";

export default interface Comic {
  name: string;
  _id: string;
  //A signifier! This one might not be needed
  refnum: string;
  description: string;
  panels: Array<Panel>;
}