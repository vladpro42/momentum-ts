import * as React from "react"
import { PlayPauseSvgType } from "./PauseSvg"

const PlaySvg = (props: PlayPauseSvgType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
            // enableBackground: "new 0 0 92.2 122.88",
        }}
        viewBox="0 0 92.2 122.88"
        {...props}
    >
        <path
            d="M92.2 60.97 0 122.88V0l92.2 60.97z"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
            }}
        />
    </svg>
)
export { PlaySvg }