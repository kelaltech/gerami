import * as React from 'react';
import { Component, InputHTMLAttributes, RefObject } from 'react';
export interface IImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
    innerRef?: RefObject<HTMLInputElement>;
    placeholderSrc?: string;
    className?: string;
    width?: number | string;
    circular?: boolean;
    borderRadius?: string | number;
}
interface IImageInputState {
    image?: string;
}
export declare class ImageInput extends Component<IImageInputProps, IImageInputState> {
    state: {
        image: undefined;
    };
    innerRef: React.RefObject<HTMLInputElement>;
    readonly imageUrl: string | null;
    render(): JSX.Element;
    private changeImg;
}
export {};
