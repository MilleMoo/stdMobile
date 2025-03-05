import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import students from '../../assets/students.json'
import {VictoryChart, VictoryBar, VictorTheme} from "victory-native"
import { BarChart } from 'react-native-chart-kit'
// import { opacity } from 'react-native-reanimated/lib/typescript/Colors'

const ChartScreen = ({ navigation }) => {
    const studentScores = students.map((s) => ({
        name: s.name,
        total: s.exam + s.project + s.activity,
    }));

    // const customTheme = {
    //     axis: {
    //         style:{
    //             tickLabels: {fontSize: 14, padding: 5}
    //         },
    //     },
    // }

    const totalScores = studentScores.map((s) => s.total)
    const averageScores = totalScores.reduce((sum, score) => sum + score,0) / totalScores.length
    const maxScores = Math.max(...totalScores)
    const minScores = Math.min(...totalScores)

    return (
        <View style = {style.container}>
            <Text style = {style.title}>
                กราฟคะแนนร่วม
            </Text>

            {/* <VictoryChart theme = {customTheme}>
                <VictoryBar data={ studentScores} x="name" y= "total" 
                    style = {{ 
                        data: {fill: "tomato"},
                        labels: {fontSize: 14, fill: "black"}
                    }}
                />
            </VictoryChart> */}
            <View style ={style.statContainer}>
                <Text style = {style.statText}>
                    ค่าเฉลี่ย: {averageScores}
                </Text>
                <Text style = {style.statText}>
                    คะแนนสูงสุด: {maxScores}
                </Text>
                <Text style = {style.statText}>
                    คะแนนต่ำสุด: {minScores}
                </Text>
            </View>
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
                    color: () => `rgba(255,255,255, 1)`,
                    labelColor: () => `rgba(255,255,255,1)`
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
        fontWeight: "bold",
        marginBottom: 10,
    },
    statContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#f8f8f8",
        borderRadius: 8,
    },
    statText: {
        fontSize: 18,
        fontWeight: "bold",
    }
})

export default ChartScreen;