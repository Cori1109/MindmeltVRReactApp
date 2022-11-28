import { Container } from "./styled";
import { Funnel, FUNNEL_CONVERSATION_FIELD } from "@ant-design/plots";

const TeamChartComponent = ({cData, isLoading}) => {

    const config = {
        data: cData,
        xField: 'title',
        yField: 'score',
        legend: false,
        label: {
            formatter: (datum) => {
              return `${(datum[FUNNEL_CONVERSATION_FIELD][1])}`;
            },
        },
        conversionTag: {
            formatter: (datum) => {
            return `${(datum[FUNNEL_CONVERSATION_FIELD][1])}`;
            },
        }, // 关闭 conversionTag 转化率 展示
        // conversionTag: false,
    };




    return (
        <Container>
            <Funnel {...config} />
        </Container>
    );
};

export default TeamChartComponent;