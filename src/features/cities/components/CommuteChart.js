import {
    PieChart,
    ResponsiveContainer,
    Pie,
    Cell,
    Legend,
    Tooltip,
} from 'recharts';

const startData = [
    {
        duration: 'Até 5 min',
        fullLabel: 'Até 5 minutos',
        value: 0,
        color: '#10b981', // verde
    },
    {
        duration: '5-15 min',
        fullLabel: '5 a 15 minutos',
        value: 0,
        color: '#34d399', // verde claro
    },
    {
        duration: '15-30 min',
        fullLabel: '15 a 30 minutos',
        value: 0,
        color: '#fbbf24', // amarelo
    },
    {
        duration: '30-60 min',
        fullLabel: '30 a 60 minutos',
        value: 0,
        color: '#fb923c', // laranja
    },
    {
        duration: '1-2h',
        fullLabel: '1 a 2 horas',
        value: 0,
        color: '#f87171', // vermelho claro
    },
    {
        duration: '2-4h',
        fullLabel: '2 a 4 horas',
        value: 0,
        color: '#ef4444', // vermelho
    },
    {
        duration: 'Mais de 4h',
        fullLabel: 'Mais de 4 horas',
        value: 0,
        color: '#dc2626', // vermelho escuro
    },
]

function prepareData(commuteSummary) {
    console.log('commuteSummary:', commuteSummary);

    return startData.map(item => {
        switch (item.duration) {
            case 'Até 5 min':
                return { ...item, value: commuteSummary.upToFiveMin };
            case '5-15 min':
                return { ...item, value: commuteSummary.sixToFifteenMin };
            case '15-30 min':
                return { ...item, value: commuteSummary.sixteenToThirtyMin };
            case '30-60 min':
                return { ...item, value: commuteSummary.overThirtyToOneHour };
            case '1-2h':
                return { ...item, value: commuteSummary.overOneHourToTwoHours };
            case '2-4h':
                return { ...item, value: commuteSummary.overTwoHoursToFourHours };
            case 'Mais de 4h':
                return { ...item, value: commuteSummary.overFourHours };
        }
    });
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                <p className="font-semibold text-gray-800">{payload[0].payload.fullLabel}</p>
                <p className="text-gray-600">
                    {payload[0].value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
                </p>
            </div>
        );
    }
    return null;
};

function CommuteChart({ commuteSummary }) {
    if (!commuteSummary) {
        return <div>Carregando dados...</div>;
    }

    const commuteData = prepareData(commuteSummary);

    return (
        <div className="w-full h-full min-h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={commuteData}
                        nameKey="duration"
                        dataKey="value"
                        innerRadius={60}
                        outerRadius={80}
                        cx="50%"
                        cy="50%"
                        paddingAngle={4}
                    >
                        {commuteData.map((entry) => (
                            <Cell
                                fill={entry.color}
                                stroke={entry.color}
                                key={entry.duration}
                            />
                        ))}
                    </Pie>
                    <Legend
                        verticalAlign="bottom"
                        align="center"
                        layout="horizontal"
                        iconSize={12}
                        iconType="circle"
                        wrapperStyle={{
                            fontSize: '13px',
                            paddingTop: '20px'
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}


export default CommuteChart
