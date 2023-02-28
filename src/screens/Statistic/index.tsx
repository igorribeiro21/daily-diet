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
    Text
} from './styles';

export function Statistic() {
    return (
        <Container>
            <Header type='PRIMARY'>
                <IconArrowLeft />
                <TextPorcentage>90,86%</TextPorcentage>
                <TextDiet>das refeições dentro da dieta</TextDiet>
            </Header>
            <Content>
                <SubTitle>Estatísticas gerais</SubTitle>

                <ContentView>
                    <BestSequelView>
                        <NumberQuantity>22</NumberQuantity>
                        <Text>melhor sequência de pratos dentro da dieta</Text>
                    </BestSequelView>
                    <BestSequelView>
                        <NumberQuantity>109</NumberQuantity>
                        <Text>refeições registradas</Text>
                    </BestSequelView>

                    <MealsContentView>
                        <MealsView type='PRIMARY'>
                            <NumberQuantity>99</NumberQuantity>
                            <Text>refeições dentro da dieta</Text>
                        </MealsView>
                        <MealsView type='SECONDARY'>
                            <NumberQuantity>10</NumberQuantity>
                            <Text>refeições fora da dieta</Text>
                        </MealsView>
                    </MealsContentView>
                </ContentView>
            </Content>
        </Container>
    );
}