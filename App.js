import React from 'react'
import { Font } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Dimensions } from 'react-native'
import Image from 'react-native-scalable-image'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  Footer,
  Content,
  Card,
  CardItem,
  DatePicker,
  Form,
  Item,
  Label,
  Input,
  Accordion,
  Root,
  ActionSheet,
  Badge,
} from 'native-base'

const accordionData = [
  { title: 'First Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' }
]

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: false
    }
  }

  componentWillMount() {
    this.loadFonts()
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ isReady: true })
  }

  showActionSheet() {
    console.log('show action sheet function')
    const options = ['アクション1', 'アクション2', 'Cancel']
    ActionSheet.show(
      {
        options: options,
        cancelButtonIndex: options.length -1,
        destructiveButtonIndex: options.length -1,
      },
      (buttonIndex: number) => {
        alert(buttonIndex);
      }
    )
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }

    return (
      <Root>
        <Container style={styles.container}>
          <Header>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" />
                <Text>Back</Text>
              </Button>
            </Left>
            <Title style={{paddingTop: 12}}>Header (´･ω･`)</Title>
            <Right>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Right>
          </Header>

          <Content style={styles.content}>
            <Text style={styles.mtb}>Native Base のお試し (`･ω･´)ｼｬｷｰﾝ</Text>
            <Button style={styles.mt}>
              <Text>Button :-D</Text>
            </Button>

            <Text style={styles.mtb}>
              複数のスタイルを当てるには配列で指定する
            </Text>
            <Text style={[styles.mtb, styles.border]}>
              mtb と border のスタイルを当てたText Component
            </Text>

            <Card>
              <CardItem>
                <Body>
                  <Text>Card Component</Text>
                </Body>
              </CardItem>
            </Card>

            <Text style={styles.mtb}>Accordion Component</Text>
            <Accordion dataArray={accordionData} expanded={0} />

            <Text style={styles.mtb}>ActionSheet</Text>
            <Button style={styles.mbt} onPress={this.showActionSheet}>
              <Text>アクションシート</Text>
            </Button>

            <Text style={styles.mtb}>Badge</Text>
            <Badge>
              <Text>default</Text>
            </Badge>
            <Badge primary>
              <Text>primary</Text>
            </Badge>

            <Text style={styles.mtb}>
              画像。
              普通に  reacit-native の Image を使うと高さ調整が地獄。react-native-scalable-image を使う
              </Text>
            <Image source={{ uri: 'https://www.pakutaso.com/shared/img/thumb/tom190303DSC03895_TP_V.jpg' }} width={Dimensions.get('window').width} />


          </Content>
        </Container>
      </Root>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  content: {
    padding: 10
  },
  mt: {
    marginTop: 10
  },
  mtb: {
    marginTop: 15,
    marginBottom: 15,
  },
  border: {
    borderWidth: 5,
    borderColor: 'red'
  },
  img: {
    width: '100%',
  },
  center: {
    backgroundColor: 'red',
  }
})
