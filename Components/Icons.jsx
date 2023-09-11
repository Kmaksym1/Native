import * as React from "react"
import Svg, { Circle, ClipPath, Defs, G, Path } from "react-native-svg"

export const Grid = ({fillcolor, strokeColor, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={fillcolor||"none"}
    {...props}
  >
    <Path fill={fillcolor||"#fff"} d="M0 0h24v24H0z" />
    <Path
      stroke={strokeColor || "#212121"}
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
// {fillcolor, strokeColor, ...props }
export const User = ({strokeColor, ...props}) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        stroke={strokeColor || "#212121"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.8}
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      />
      <Path
        stroke={strokeColor || "#212121"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.8}
        d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
    </Svg>
)
export function PlusIcon({strokeColor, ...props}) {
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
          fill={strokeColor||"black"}
          {...props}
        />
      </Svg>
    );
}
  
export const Add = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Circle cx={12.5} cy={12.5} r={12} stroke="#FF6C00" />
    <Path
      fill="#FF6C00"
      fillRule="evenodd"
      d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
      clipRule="evenodd"
    />
  </Svg>
)

export const CameraIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#BDBDBD" clipPath="url(#a)">
      <Path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
      <Path d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9Zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const ArrayLeft = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    marginLeft={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#212121"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      d="M20 12H4M10 18l-6-6 6-6"
    />
  </Svg>
)
export const MapPin = (props) => (
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
      d="M20 10.364C20 16.09 12 21 12 21s-8-4.91-8-10.636C4 6.297 7.582 3 12 3s8 3.297 8 7.364v0Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </Svg>
)
export const ArrowUp = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m6 1 .354-.354a.5.5 0 0 0-.708 0L6 1Zm4.646 5.354a.5.5 0 0 0 .708-.708l-.708.708Zm-10-.708a.5.5 0 1 0 .708.708l-.708-.708ZM5.5 15a.5.5 0 0 0 1 0h-1Zm.146-13.646 5 5 .708-.708-5-5-.708.708Zm0-.708-5 5 .708.708 5-5-.708-.708ZM5.5 1v7h1V1h-1Zm0 7v7h1V8h-1Z"
    />
  </Svg>
)

export const MassagesIcon = (props) => (
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
      d="M3 11.5a8.38 8.38 0 0 0 .9 3.8 8.5 8.5 0 0 0 7.6 4.7 8.38 8.38 0 0 0 3.8-.9L21 21l-1.9-5.7a8.38 8.38 0 0 0 .9-3.8 8.5 8.5 0 0 0-4.7-7.6 8.38 8.38 0 0 0-3.8-.9H11a8.48 8.48 0 0 0-8 8v.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export const LikesIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF6C00"
      d="M13.365 7.6h-.5a.5.5 0 0 0 .5.5v-.5Zm0-3.2h.5-.5ZM10.774 2v-.5a.5.5 0 0 0-.451.284l.45.216ZM7.319 9.2l-.451-.216a.5.5 0 0 0-.05.216h.5Zm0 8.8h-.5a.5.5 0 0 0 .5.5V18Zm9.742 0 .006-.5h-.006v.5Zm1.728-1.36-.494-.082v.001l.494.08Zm1.191-7.2.494.082V9.52l-.494-.081ZM18.253 7.6v.5h.005l-.005-.5ZM7.32 18v.5a.5.5 0 0 0 .5-.5h-.5Zm0-8.8h.5a.5.5 0 0 0-.5-.5v.5Zm6.546-1.6V4.4h-1v3.2h1Zm0-3.2c0-1.637-1.421-2.9-3.091-2.9v1c1.191 0 2.09.886 2.09 1.9h1Zm-3.542-2.616-3.455 7.2.901.432 3.455-7.2-.901-.432ZM6.819 9.2V18h1V9.2h-1Zm.5 9.3h9.742v-1H7.32v1Zm9.737 0c1.08.011 2.052-.72 2.226-1.78l-.987-.16c-.085.517-.585.947-1.229.94l-.01 1Zm2.226-1.778 1.192-7.2-.987-.164-1.192 7.2.987.164Zm1.192-7.201a2.02 2.02 0 0 0-.533-1.713l-.73.684c.231.245.326.562.276.867l.987.162Zm-.533-1.713a2.29 2.29 0 0 0-1.693-.708l.01 1a1.29 1.29 0 0 1 .954.392l.729-.684ZM18.253 7.1h-4.888v1h4.888v-1ZM7.32 17.5H4.727v1H7.32v-1Zm-2.592 0c-.714 0-1.227-.528-1.227-1.1h-1c0 1.195 1.034 2.1 2.227 2.1v-1ZM3.5 16.4v-5.6h-1v5.6h1Zm0-5.6c0-.572.513-1.1 1.227-1.1v-1c-1.193 0-2.227.905-2.227 2.1h1Zm1.227-1.1H7.32v-1H4.727v1Zm2.092-.5V18h1V9.2h-1Z"
    />
  </Svg>
)

export const Trash = (props) => (
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
      d="M3 6h18"
    />
    <Path
      fill="#BDBDBD"
      d="M19.5 6a.5.5 0 0 0-1 0h1Zm-14 0a.5.5 0 0 0-1 0h1Zm2 0a.5.5 0 0 0 1 0h-1Zm8 0a.5.5 0 0 0 1 0h-1Zm3 0v14h1V6h-1Zm0 14a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5h-1ZM17 21.5H7v1h10v-1Zm-10 0A1.5 1.5 0 0 1 5.5 20h-1A2.5 2.5 0 0 0 7 22.5v-1ZM5.5 20V6h-1v14h1Zm3-14V4h-1v2h1Zm0-2A1.5 1.5 0 0 1 10 2.5v-1A2.5 2.5 0 0 0 7.5 4h1ZM10 2.5h4v-1h-4v1Zm4 0A1.5 1.5 0 0 1 15.5 4h1A2.5 2.5 0 0 0 14 1.5v1ZM15.5 4v2h1V4h-1Z"
    />
    <Path
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 11v6M14 11v6"
    />
  </Svg>
)
export const Flip = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"
    />
    <Path
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m256 58 80 80-80 80"
    />
  </Svg>
)