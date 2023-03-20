import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import {
    Container,
    Content,
    Header,
    TextPorcentage,
    IconArrowLeft,
    TextDiet,
    SubTitle,
    BestSequelView,
    ContentView,
    NumberQuantity,
    MealsContentView,
    MealsView,
    Text,
    ButtonBack
} from './styles';
import { getAll } from '@storage/statistic/getAll';
import { statisticDTO } from '@storage/statistic/statisticDTO';

export function Statistic() {
    const [statistic, setStatistic] = useState<statisticDTO>();
    const navigation = useNavigation();
    function handleBack() {
        navigation.goBack();
    }

    async function getStatistic() {
        const storage = await getAll();

        if (storage)
            setStatistic(storage);
         
    }

    useEffect(() => {
        getStatistic();
    }, []);

    return (
        <Container>

            <Header type='PRIMARY'>
                <ButtonBack onPress={handleBack}>
                    <IconArrowLeft />
                </ButtonBack>
                <TextPorcentage>{statistic?.porcentage ? `${statistic.porcentage.toFixed(2).replace('.',',')}%` : '0.00%'}</TextPorcentage>
                <TextDiet>das refeições dentro da dieta</TextDiet>
            </Header>
            <Content>
                <SubTitle>Estatísticas gerais</SubTitle>

                <ContentView>
                    <BestSequelView>
                        <NumberQuantity>{statistic?.sequence ? statistic.sequence : 0}</NumberQuantity>
                        <Text>melhor sequência de pratos dentro da dieta</Text>
                    </BestSequelView>
                    <BestSequelView>
                        <NumberQuantity>{statistic?.total ? statistic.total : 0}</NumberQuantity>
                        <Text>refeições registradas</Text>
                    </BestSequelView>

                    <MealsContentView>
                        <MealsView type='PRIMARY'>
                            <NumberQuantity>{statistic?.mealInside ? statistic.mealInside : 0}</NumberQuantity>
                            <Text>refeições dentro da dieta</Text>
                        </MealsView>
                        <MealsView type='SECONDARY'>
                            <NumberQuantity>{statistic?.mealNotInside ? statistic.mealNotInside : 0}</NumberQuantity>
                            <Text>refeições fora da dieta</Text>
                        </MealsView>
                    </MealsContentView>
                </ContentView>
            </Content>
        </Container>
    );
}