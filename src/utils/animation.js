import { keyframes } from "@emotion/react"

export const fade50px = keyframes`
from {
  opacity: 0;
  transform: translateY(50px);
}

to {
  opacity: 1;
  transform: translateY(0);
}
`
export const fadeBottom = keyframes`
from {
  opacity: 0;
  transform: translateY(-50px);
}

to {
  opacity: 1;
  transform: translateY(0);
}
`
export const fadeRight = keyframes`
from {
  opacity: 0;
  transform: translateX(-50px);
}

to {
  opacity: 1;
  transform: translateX(0);
}
`

export const fadeLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(50px);
}

to {
  opacity: 1;
  transform: translateX(0);
}
`
