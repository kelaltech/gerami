import * as React from 'react'
import { Link } from 'react-router-dom'

import './Button.scss'

export class Button extends React.Component<any,any>{
  constructor(props:any){
    super(props);
  }
  render(){
    const { children, className, primary, to, type, ...rest }=this.props;
      const button = (
          <button
              {...rest}
              className={`button ${
                  primary || (typeof type === 'string' && type.toLowerCase() === 'submit')
                      ? 'button-primary'
                      : ''
                  }${className ? ' ' + className : ''}`}
              type={type || 'button'}
          >
              {children}
          </button>
      )
     return to ? <Link to={to}>{button}</Link> : button
  }
}

