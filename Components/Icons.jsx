import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Grid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#fff" d="M0 0h24v24H0z" />
    <Path
      stroke="#212121"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      d="M3 3h7v7H3V3ZM14 3h7v7h-7V3ZM14 14h7v7h-7v-7ZM3 14h7v7H3v-7Z"
      clipRule="evenodd"
    />
  </Svg>
)

export const LogOut = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5M17 16l4-4-4-4M21 12H9"
      />
    </Svg>
)
  
export const User = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        stroke="#212121"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.8}
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      />
      <Path
        stroke="#212121"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.8}
        d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
    </Svg>
)
export function PlusIcon(props) {
    return (
      <Svg
        width={13}
        height={13}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M7.5 0.5H6.5V6.5H0.5V7.5H6.5V13.5H7.5V7.5H13.5V6.5H7.5V0.5Z"
          fill="white"
          {...props}
        />
      </Svg>
    );
  }
