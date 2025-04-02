import { Dispatch, SetStateAction } from "react";
import { GridButton } from "./gridbutton";

interface ButtonCaseProps {
  setToggledComponent: Dispatch<SetStateAction<string>>;
}

export function ButtonCase({ setToggledComponent }: ButtonCaseProps) {
  return (
    <div className=" grid grid-cols-2 items-start gap-1 ">
      {/* <div className="absolute z-[-2]"> Get to Know Me</div> */}
      <GridButton
        className="col-span-2 h-20"
        onClick={() => {
          setToggledComponent("about");
        }}
      >
        About
      </GridButton>
      <GridButton
        className="col-span-1 h-20 p-5"
        onClick={() => {
          setToggledComponent("exp");
        }}
      >
        Work Experience
      </GridButton>
      <GridButton
        className="col-span-1 h-20 p-5"
        onClick={() => {
          setToggledComponent("builds");
        }}
      >
        Builds
      </GridButton>
    </div>
  );
}
