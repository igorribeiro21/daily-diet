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
    IconPorcentage,
    ButtonPress
} from './styles';

import { Button } from '@components/Button';

import {
    Text,
    SectionList,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


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
    const navigation = useNavigation();
    function handleNewMeal() {
        navigation.navigate('editAndNewMeal', { edit: false });
    }

    function handleStatistic() {
        navigation.navigate('statistic');
    }

    function handleItem(insideDiet: boolean) {
        navigation.navigate('meal', { insideDiet })
    }

    return (
        <Container>
            <Logo
                source={logo}
            />

            <ImageUser
                source={ellipse}
            />

            <ButtonPress onPress={handleStatistic}>
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
            </ButtonPress>

            <ViewContains>
                <TextContains>Refeições</TextContains>

                <Button
                    title='+ Nova refeição'
                    onPress={handleNewMeal}
                />

                <SectionList
                    sections={data}
                    style={{
                        marginTop: 30
                    }}
                    keyExtractor={(item, index) => item.name + index}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleItem(item.active)}>
                            <ViewItem>
                                <TextHour>{item.hour}</TextHour>
                                <Text> | </Text>
                                <TextName>{item.name}</TextName>
                                {item.active ? <ItemActive /> : <ItemInactive />}
                            </ViewItem>
                        </TouchableOpacity>
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