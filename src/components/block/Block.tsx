import * as React from 'react'
import './Block.scss'

export class Block extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    render(){
        const { children, className, first, last, ...rest }=this.props;
        return(
            <div
                style={{
                    paddingTop: first ? 30 : 10,
                    paddingBottom: last ? 30 : 10
                }}
                {...rest}
                className={`block${className ? ' ' + className : ''}`}
            >
                {children}
            </div>
        )
    }
}
