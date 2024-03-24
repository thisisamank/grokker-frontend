import * as React from "react";

interface ISubtitleProps {
    text: string;
}

export function Subtitle(props: ISubtitleProps) {
    return <p className='font-semibold text-left my-2'>{props.text}</p>
}