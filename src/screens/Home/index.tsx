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
    ButtonPress,
    ContainerListEmpty,
    TextListEmpty
} from './styles';

import { Button } from '@components/Button';
import { Section } from '@storage/storageConfig';

import { useState, useCallback } from 'react';
import {
    Text,
    SectionList,
    TouchableOpacity
} from 'react-native';
import moment from 'moment';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getAll } from '@storage/meal/getAll';
import { getAll as getAllStatistic } from '@storage/statistic/getAll';


import ellipse from '@assets/ellipse.png';
import logo from '@assets/logo.png';
import { mealDTO } from '@storage/meal/mealDTO';
import { statisticDTO } from '@storage/statistic/statisticDTO';

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
    const [sectionData, setSectionData] = useState<Section[]>([]);
    const [statistic, setStatistic] = useState<statisticDTO>();    

    async function getAllStorage() {
        const dataStorage = await getAll();
        setSectionData(dataStorage);
    }

    async function getStatistic() {
        const storage = await getAllStatistic();

        if(storage)
            setStatistic(storage);
    }

    function handleNewMeal() {
        navigation.navigate('editAndNewMeal', { edit: false });
    }

    function handleStatistic() {
        navigation.navigate('statistic');
    }

    function handleItem(item: mealDTO) {
        navigation.navigate('meal', {  meal: item })
    }

    useFocusEffect(useCallback(() => {
        getAllStorage();
        getStatistic();
    },[]));

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
                        {statistic ? statistic.porcentage.toFixed(2).replace('.',',') : '0,00'}%
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
                    sections={sectionData}
                    style={{
                        marginTop: 30
                    }}
                    keyExtractor={(item, index) => item.name + index}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleItem(item)}>
                            <ViewItem>
                                <TextHour>{moment(item.date).format("HH:mm")}</TextHour>
                                <Text> | </Text>
                                <TextName>{item.name}</TextName>
                                {item.insideDiet ? <ItemActive /> : <ItemInactive />}
                            </ViewItem>
                        </TouchableOpacity>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <TextTitle>{moment(title).format('DD.MM.YY')}</TextTitle>
                    )}
                    ListEmptyComponent={() => (
                        <ContainerListEmpty>
                            <TextListEmpty>
                                Cadastre sua primeira refeição.
                            </TextListEmpty>
                        </ContainerListEmpty>
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