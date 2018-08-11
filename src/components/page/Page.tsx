import * as React from 'react'
import './Page.scss'

export class Page extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    render(){
        const { bottom, children, className, top, style, ...rest }=this.props;
        const paddingTop =
            top === true ||
            (typeof top === 'string' &&
                (top.toLowerCase() === 'auto' || top.toLowerCase() === 'adaptive'))
                ? '7%'
                : typeof top === 'number' || typeof top === 'string'
                ? top
                : 20;
        const paddingBottom =
            bottom === true ||
            (typeof bottom === 'string' &&
                (bottom.toLowerCase() === 'auto' || bottom.toLowerCase() === 'adaptive'))
                ? '7%'
                : typeof bottom === 'number' || typeof bottom === 'string'
                ? bottom
                : 20;
        return (
            <div
                {...rest}
                className={`page${className ? ' ' + className : ''}`}
                //@ts-ignore
                style={Object.assign(
                    {
                        paddingTop: paddingTop,
                        paddingBottom: paddingBottom
                    },
                    style
                )}
            >
                {children}
            </div>
        )
    }

}