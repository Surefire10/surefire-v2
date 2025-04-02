/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject } from "react";

export function TextScramble(ref: RefObject<HTMLParagraphElement>) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ710&*$#!@";
  const text = ref.current?.innerText;
  let iteration = 0;
  let interval: any = null;

  interval = setInterval(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    ref.current!.innerText = text
      ?.split("")
      .map((letter, index) => {
        if (index < iteration) {
          return ref.current?.innerText[index];
        }
        return characters[Math.ceil(Math.random() * 35)];
      })
      .join("")!;

    if (iteration >= text!.length) {
      clearInterval(interval);
    }
    iteration += 1;
  }, 10);
}
