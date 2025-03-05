import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import students from '../../assets/students.json'

const HomeScreen = ({navigation}) => {
    return (
        <View style = {style.container}>
            <Text style = {style.title}>
                รายชื่อนักเรียน
            </Text>
            <View style = {style.tbHeader}>
                <Text style = {style.tbColHeader}>
                    Name
                </Text>
                <Text style = {style.tbColHeader}>
                    Scores
                </Text>
            </View>

            <FlatList
                data={students}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={style.listitem}>
                        <Text style={style.listname}>
                            {item.name}
                        </Text>
                        <Text style={style.listTotal}>
                            {item.exam + item.project + item.activity}
                        </Text>
                    </View>
                )}
            />
            <TouchableOpacity style = {style.button} onPress={() => navigation.navigate("Chart")}>
                <Text style = {style.buttonText}>
                    ดูกราฟ 
                </Text>
            </TouchableOpacity>
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
    listitem: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    listTotal: {
        fontSize: 18,
        color: "#555",
    },
    listname: {
        fontSize: 20,
        fontWeight: "bold",
    },
    tbHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    tbColHeader: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
    },
    button: {
        backgroundColor: "#3b5998",
        padding: 10,
        borderRadius: 9,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },
})

export default HomeScreen;