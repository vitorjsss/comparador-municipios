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
        label: 'Fundamental incompleto',
        shortLabel: 'Fund. Incompleto',
        value: 0,
        color: '#ef4444', // vermelho
    },
    {
        label: 'Fundamental completo',
        shortLabel: 'Fund. Completo',
        value: 0,
        color: '#f59e0b', // laranja/amarelo
    },
    {
        label: 'Ensino médio completo',
        shortLabel: 'Médio Completo',
        value: 0,
        color: '#10b981', // verde
    },
    {
        label: 'Ensino superior completo',
        shortLabel: 'Superior Completo',
        value: 0,
        color: '#3b82f6', // azul
    },
]

function prepareData(educationSummary) {
    console.log('educationSummary:', educationSummary);

    return startData.map(item => {
        switch (item.label) {
            case 'Fundamental incompleto':
                return { ...item, value: educationSummary.fundamentalIncompleto };
            case 'Fundamental completo':
                return { ...item, value: educationSummary.fundamentalCompleto };
            case 'Ensino médio completo':
                return { ...item, value: educationSummary.medioCompleto };
            case 'Ensino superior completo':
                return { ...item, value: educationSummary.superiorCompleto };
        }
    });
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                <p className="font-semibold text-gray-800">{payload[0].payload.label}</p>
                <p className="text-gray-600">
                    {payload[0].value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
                </p>
            </div>
        );
    }
    return null;
};

function EducationChart({ educationSummary }) {
    if (!educationSummary) {
        return <div>Carregando dados...</div>;
    }

    const educationData = prepareData(educationSummary);

    return (
        <div className="w-full h-full min-h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={educationData}
                        nameKey="shortLabel"
                        dataKey="value"
                        innerRadius={60}
                        outerRadius={80}
                        cx="50%"
                        cy="50%"
                        paddingAngle={4}
                    >
                        {educationData.map((entry) => (
                            <Cell
                                fill={entry.color}
                                stroke={entry.color}
                                key={entry.label}
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


export default EducationChart
