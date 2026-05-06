import { Panel } from "../components/panel/panel";

export default interface Comic {
  title: string;
  _id: string;
  //A signifier! This one might not be needed
  sign: string;
  panels: Array<Panel>;
}