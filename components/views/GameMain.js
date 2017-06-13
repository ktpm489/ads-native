import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Body, Title, Container, Content, Text} from 'native-base';

class GameMainView extends Component {

    render() {
        const {user} = this.props;
        console.log('state in main', this.props);
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>
                        {`${user.name} ${user.surname}`}
                    </Title>
                    </Body>
                </Header>
                <Content>
                    <Text>Main</Text>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = ({user}) => {
    return {
        user
    };
};

const mapDispatchToProps = () => {
    return {};
};

const GameMain = connect(mapStateToProps, mapDispatchToProps)(GameMainView);
export {GameMain}