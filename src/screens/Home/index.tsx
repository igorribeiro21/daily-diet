import {
    Container,
    ImageUser,
    Logo,
    ViewPorcentage,
    TextPorcentage,
    ViewContains,
    TextContains,
} from './styles';

import { Button } from '@components/Button';

import {
    Text,
} from 'react-native';


import ellipse from '@assets/ellipse.png';
import logo from '@assets/logo.png';

export function Home() {
    return (
        <Container>
            <Logo
                source={logo}
            />

            <ImageUser
                source={ellipse}
            />

            <ViewPorcentage>
                <TextPorcentage>
                    90,86%
                </TextPorcentage>
                <Text
                    style={{
                        fontWeight: '400',
                        fontSize: 14,
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    das refeições dentro da dieta
                </Text>
            </ViewPorcentage>

            <ViewContains>
                <TextContains>Refeições</TextContains>

                <Button
                    title='+ Nova refeição'
                />
            </ViewContains>
        </Container>
    );
}