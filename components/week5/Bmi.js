import { useState } from "react";
import { Button, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";

export default function Bmi() {

    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [Proportion, setProportion] = useState('NORMAL');

    console.log("STATE : ", weight, height, bmi, Proportion);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight / (height / 100 * height / 100));
        setBmi(output.toFixed(2));

        let description = "";
        if (output < 18.5)
            description = "Underweight - eat a bagel!";
        else if (output >= 18.5 && output <= 24.99)
            description = "Normal - keep it up!";
        else if (output >= 25 && output <= 29.99)
            description = "Overweight - exercise more!";
        else if (output >= 30 && output <= 35)
            description = "Obese - get off the couch!";
        else
            description = "Morbidly Obese - take action!";
        setProportion(description);


    };

    return (
        <View>
            {/* View1 */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
                <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
                <TextInput value={weight} onChangeText={(newWeight) => setWeight(newWeight)} style={{ fontSize: 20 }} keyboardType="numeric" placeholder="Input your Weight …" ></TextInput>
            </View>

            {/* View2 */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
                <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
                <TextInput value={height} onChangeText={(newHeight) => setHeight(newHeight)} style={{ fontSize: 20 }} keyboardType="numeric" placeholder="Input your Height …" ></TextInput>
            </View>

            {/* View3 */}
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                {/* ซ้าย */}
                <View style={{ flex: 1, backgroundColor: "white", marginRight: 10, height: 100, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>{bmi}</Text>

                </View>
                {/* ขวา */}
                <View style={{ flex: 1, backgroundColor: "white", marginLeft: 10, height: 100, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>{Proportion}</Text>
                </View>
            </View>
            <View>
                {/* <Button title="Calculate" onPress={onPressButton} /> */}
                <TouchableOpacity onPress={onPressButton}>
                    <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                        <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                            Calculate
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    );
}