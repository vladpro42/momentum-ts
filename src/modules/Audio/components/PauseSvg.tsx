import * as React from "react"

export type PlayPauseSvgType = {
    width: string
    height: string
    fill?: string
}


const PauseSvg = (props: PlayPauseSvgType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
            //enableBackground: "new 0 0 87.72 122.88",
        }}
        viewBox="0 0 87.72 122.88"
        {...props}
    >
        <path
            d="M0 0h35.54v122.88H0V0zm52.18 0h35.54v122.88H52.18V0z"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
            }}
        />
    </svg>
)
export { PauseSvg }