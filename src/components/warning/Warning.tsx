import * as React from 'react'
import './Warning.scss'
import { Content } from '../..'
import { Block } from '../..'

export class Warning extends React.Component<any, any> {
  private dead = false
  constructor(props: any) {
    super(props)
    this.state = {
      hidden: false
    }
    this.shyAway = this.shyAway.bind(this)
  }

  componentDidMount() {
    const { bomb } = this.props
    if (bomb) window.setTimeout(this.shyAway, typeof bomb === 'number' ? bomb : 7000)
  }

  componentWillUnmount() {
    this.dead = true
  }

  render() {
    const { children, className, problem, shy, ...rest } = this.props
    //@ts-ignore
    !rest || delete rest.bomb

    return this.dead || this.state.hidden ? null : (
      <Content
        title={shy ? 'Double click to hide warning' : undefined}
        {...rest}
        className={`warning${className ? ' ' + className : ''}`}
        onDoubleClick={(e: any) => {
          this.shyAway()
          if (typeof rest.onDoubleClick === 'function') rest.onClick(e)
        }}
      >
        <Block>
          {children ||
            (problem ? (
              <div className={'font-S center'}>
                {problem.code ? problem.code + ': ' : null}
                {problem.message || (typeof problem === 'string' ? problem : null)}
              </div>
            ) : null)}
        </Block>
      </Content>
    )
  }

  shyAway(): any {
    const { shy } = this.props

    if (shy && !this.dead) {
      this.setState({ hidden: true })
      if (typeof shy === 'function') shy()
    }
  }
}
