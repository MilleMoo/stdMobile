import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import students from '../../assets/students.json'
import { LineChart } from 'react-native-chart-kit'
import { BarChart } from 'react-native-chart-kit'

const ChartScreen = ({ navigation }) => {
    const studentScores = students.map((s) => ({
        name: s.name,
        total: s.exam + s.project + s.activity,
    }));

    const totalScores = studentScores.map((s) => s.total);
    const averageScores = totalScores.reduce((sum, score) => sum + score, 0) / totalScores.length;
    const maxScores = Math.max(...totalScores);
    const minScores = Math.min(...totalScores);

    return (
        <View style={style.container}>
            <Text style={style.title}>
                กราฟคะแนนร่วม
            </Text>
            <View style={style.statContainer}>
                <Text style={style.statText}>
                    ค่าเฉลี่ย: {averageScores}
                </Text>
                <Text style={style.statText}>
                    คะแนนสูงสุด: {maxScores}
                </Text>
                <Text style={style.statText}>
                    คะแนนต่ำสุด: {minScores}
                </Text>
            </View>

            <LineChart
                data={{
                    labels: students.map((s) => s.name),
                    datasets: [
                        {
                            data: studentScores.map((s) => s.total),
                            strokeWidth: 2, 
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 40} 
                height={220}
                chartConfig={{
                    backgroundColor: '#1e2923',
                    backgroundGradientFrom: '#3b5998',
                    backgroundGradientTo: '#192f6e',
                    decimalPlaces: 2,
                    color: () => 'rgba(255, 255, 255, 1)',
                    labelColor: () => 'rgba(255, 255, 255, 1)',
                    style: {
                        borderRadius: 16,
                    },
                }}
                bezier 
                withDots={false} 
            />
            <BarChart
                data={{ 
                    labels: students.map((s) => s.name),
                    datasets: [{data: studentScores.map((s) => s.total)}]
                }}
                width={Dimensions.get("window").width - 40}
                height={220}
                yAxisLabel=''
                chartConfig={{ 
                    backgroundColor: "#1e2923",
                    backgroundGradientFrom: "#3b5998",
                    backgroundGradientTo: "#192f6e",
                    decimalPlaces: 2,
                    color: () => 'rgba(255,255,255, 1)',
                    labelColor: () => 'rgba(255,255,255,1)'
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    statContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
    },
    statText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default ChartScreen;
