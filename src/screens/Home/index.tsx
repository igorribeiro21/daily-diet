import {
    Container,
    ImageUser,
    Logo,
    ViewPorcentage,
    TextPorcentage,
    ViewContains,
    TextContains,
    ViewItem,
    TextHour,
    TextName,
    ItemActive,
    ItemInactive,
    TextTitle,
    IconPorcentage
} from './styles';

import { Button } from '@components/Button';

import {
    Text,
    SectionList,
} from 'react-native';


import ellipse from '@assets/ellipse.png';
import logo from '@assets/logo.png';

const data = [
    {
        title: new Date(2022, 8, 17),
        data: [
            {
                name: 'X-tudo',
                active: false,
                hour: '20:08'
            },
            {
                name: 'Whey protein',
                active: true,
                hour: '16:00'
            },
            {
                name: 'X-tudo',
                active: false,
                hour: '20:08'
            },
            {
                name: 'Whey protein',
                active: true,
                hour: '16:00'
            }
        ]
    },
    {
        title: new Date(2022, 8, 16),
        data: [
            {
                name: 'X-tudo',
                active: false,
                hour: '20:00'
            }
        ]
    },
    {
        title: new Date(2022, 8, 15),
        data: [
            {
                name: 'X-tudo',
                active: false,
                hour: '20:00'
            }
        ]
    },
    {
        title: new Date(2022, 8, 14),
        data: [
            {
                name: 'X-tudo',
                active: false,
                hour: '20:00'
            }
        ]
    },
    {
        title: new Date(2022, 8, 13),
        data: [
            {
                name: 'X-tudo',
                active: false,
                hour: '20:08'
            },
            {
                name: 'Whey protein',
                active: true,
                hour: '16:00'
            },
            {
                name: 'X-tudo',
                active: false,
                hour: '20:08'
            },
            {
                name: 'Whey protein',
                active: true,
                hour: '16:00'
            }
        ]
    },
    {
        title: new Date(2022, 8, 12),
        data: [
            {
                name: 'X-tudo',
                active: false,
                hour: '20:00'
            }
        ]
    },
    {
        title: new Date(2022, 8, 11),
        data: [
            {
                name: 'X-tudo',
                active: false,
                hour: '20:00'
            }
        ]
    },
    {
        title: new Date(2022, 8, 10),
        data: [
            {
                name: 'X-tudo',
                active: false,
                hour: '20:00'
            }
        ]
    },
]

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
                <IconPorcentage />
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

                <SectionList
                    sections={data}
                    style={{
                        marginTop: 30
                    }}
                    keyExtractor={(item, index) => item.name + index}
                    renderItem={({ item }) => (
                        <ViewItem>
                            <TextHour>{item.hour}</TextHour>
                            <Text> | </Text>
                            <TextName>{item.name}</TextName>
                            {item.active ? <ItemActive /> : <ItemInactive />}
                        </ViewItem>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <TextTitle>{String(`${title.getDate()}.${title.getMonth()}.${title.getFullYear()}`)}</TextTitle>
                    )}
                    contentContainerStyle={{
                        paddingBottom: 200
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </ViewContains>
        </Container>
    );
}