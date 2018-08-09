import React, { Component } from 'react'
import {
  AccountPic,
  Anchor,
  Block,
  Button,
  Card,
  Content,
  FlexSpacer,
  Image,
  Input,
  LeftDrawer,
  Loading,
  MenuDrop,
  MenuItem,
  Page,
  TextArea,
  Warning
} from '../../../src'

import Logo from '../_assets/images/logo.svg'

class App extends Component {
  state = {
    isMenuDropOpen: false,
    isLeftDrawerOpen: false
  }

  render() {
    const { isMenuDropOpen, isLeftDrawerOpen } = this.state
    const boxStyle = { width: 70, height: 70 }

    return (
      <Page top={'auto'} bottom={'auto'}>
        <Content size="M">
          <Block first last>
            <h1>Kelal's Gerami</h1>
            <div>
              <small>Demo of all Kelal's Gerami components using React.</small>
            </div>
          </Block>

          <hr />

          <Block first last>
            <code>AccountPic:</code>
            <br />
            <br />
            <AccountPic
              src="https://loremflickr.com/210/210/person,face/all"
              style={boxStyle}
            />
          </Block>

          <hr />

          <Block first last>
            <code>Anchor:</code>
            <br />
            <br />
            <Anchor href="">Just an Anchor.</Anchor>
          </Block>

          <hr />

          <Block first last>
            <code>Block:</code>
            <br />
            <br />
            <Block>Just a Block.</Block>
          </Block>

          <hr />

          <Block first last>
            <code>Button:</code>
            <br />
            <br />
            <Button>Just a Button.</Button>
          </Block>

          <hr />

          <Block first last>
            <code>Card:</code>
            <br />
            <br />
            <Card
              imgSrc={'https://loremflickr.com/600/800/person,face/all'}
              title={'Card Title'}
              subtitle={'Card Subtitle'}
              actions={[
                <span>Action Text</span>,
                <FlexSpacer />,
                <Anchor>Action Anchor</Anchor>
              ]}
            >
              Just a Card.
            </Card>
          </Block>

          <hr />

          <Block first last>
            <code>Content:</code>
            <br />
            <br />
            <Content>Just a Content.</Content>
          </Block>

          <hr />

          <Block first last>
            <code>FlexSpacer:</code>
            <br />
            <br />
            <div style={{ display: 'flex' }}>
              left
              <FlexSpacer />
              center
              <FlexSpacer />
              right
            </div>
          </Block>

          <hr />

          <Block first last>
            <code>Image:</code>
            <br />
            <br />
            <Image src={Logo} style={boxStyle} />
          </Block>

          <hr />

          <Block first last>
            <code>Input:</code>
            <br />
            <br />
            <Input placeholder="Just an Input." />
          </Block>

          <hr />

          <Block first last>
            <code>LeftDrawer:</code>
            <br />
            <br />
            <Button onClick={() => this.setState({ isLeftDrawerOpen: true })}>
              Open LeftDrawer
            </Button>
            <LeftDrawer
              onClose={() => this.setState({ isLeftDrawerOpen: false })}
              open={isLeftDrawerOpen}
              size={'M'}
            >
              Just a LeftDrawer.
            </LeftDrawer>
          </Block>

          <hr />

          <Block first last>
            <code>Loading:</code>
            <br />
            <br />
            <Loading delay />
          </Block>

          <hr />

          <Block first last>
            <code>MenuDrop &amp; MenuItem:</code>
            <br />
            <br />
            <Button onClick={() => this.setState({ isMenuDropOpen: true })}>
              Open MenuDrop
            </Button>
            <MenuDrop
              onClose={() => this.setState({ isMenuDropOpen: false })}
              open={isMenuDropOpen}
              size={'L'}
            >
              <MenuItem>Just a MenuItem.</MenuItem>
              <MenuItem>Inside a MenuDrop.</MenuItem>
            </MenuDrop>
          </Block>

          <hr />

          <Block first last>
            <code>Page:</code>
            <br />
            <br />
            <Page>Just a Page.</Page>
          </Block>

          <hr />

          <Block first last>
            <code>TextArea:</code>
            <br />
            <br />
            <TextArea placeholder="Just a TextArea." />
          </Block>

          <hr />

          <Block first last>
            <code>Warning:</code>
            <br />
            <br />
            <Warning shy problem="Just a Warning." />
          </Block>
        </Content>
      </Page>
    )
  }
}

export default App
