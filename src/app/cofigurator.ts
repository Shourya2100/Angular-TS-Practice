
import { student } from "./student";
import { marks } from "./test/marks";

export interface Student_Data 
{
    stds:student[];
    score:marks
    activities?:string[];
      
}