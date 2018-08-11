import * as React from 'react'
import './FlexSpacer.scss'

export class FlexSpacer extends React.Component<any,any>{
    constructor(props:any){
      super(props);
    }
    render(){
      const { className, ...rest }= this.props;
      return(
          <span
            className={`flex-spacer${className ? ' ' + className : ''}`}
            {...rest}
          />
      );
    }
}