import React, { useState} from 'react';
import {Picker,Button,  StyleSheet, Text, View } from 'react-native';


export default function Questions(){

        const [score, setScore] = useState(0);
        // const [questionOne, setquestionOne] = useState("Progressive Party");
        const [selectedValue, setSelectedValue] = useState("");
        // const [questionTwo, setquestionTwo] = useState("1600s");
        // const [questionThree, setquestionThree] = useState("Tesla");
        // const [questionFour, setquestionFour] = useState("Khmer Rouge");
        // const [questionFive, setquestionFive] = useState("Gaul");

        const[setEnableState] = useState(true);

        const setFinalScore = (score) => {
            console.log(selectedValue);
            setScore(score + 1);
        }

        const buttonScore = () => {
            if(selectedValue == "Progressive Party"){
                setFinalScore(score);
            }

            if(selectedValue == "1300s"){
                setFinalScore(score);
            }

            if(selectedValue == "Edison"){
                setFinalScore(score);
            }

            if(selectedValue == "Khmer Rouge"){
                setFinalScore(score);
            }

            if(selectedValue == "Gaul"){
                setFinalScore(score);
            }
        }

        return(
            
            <View style= {styles.container}>

                <Button
                    onPress={buttonScore}
                    title="Submit Answers"
                    color="#841584"
                />

                <Text>{score} Correct Answers</Text>

                <Text>Question One: What Party did Roosevelt create in 1912?</Text>

            <Picker style= {styles.item}
                    selectedValue={selectedValue}
                    style={{ height: 100, width: 250 }}
                    enabled={setEnableState}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Progressive Party" value="Progressive Party" />
                    <Picker.Item label="Red Ribbon Party" value="Red Ribbon Party" />
                    <Picker.Item label="Red Moose Party" value="Red Moose Party" />
                    <Picker.Item label="Federalist Party" value="Federalist Party" />
                </Picker>

                <Text>Question Two: What century did the black plague pandemic took place?</Text>

            <Picker style= {styles.item}
                    selectedValue={selectedValue}
                    style={{ height: 100, width: 250 }}
                    enabled={setEnableState}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="1600s" value="1600s" />
                    <Picker.Item label="1400s" value="1400s" />
                    <Picker.Item label="1200s" value="1200s" />
                    <Picker.Item label="1300s" value="1300s" />
                </Picker>

                <Text>Question Three: Who created the first Kinetograph?</Text>

            <Picker style= {styles.item}
                    selectedValue={selectedValue}
                    style={{ height: 100, width: 250 }}
                    enabled={setEnableState}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Tesla" value="Tesla" />
                    <Picker.Item label="Wright Brothers" value="Wright Brothers" />
                    <Picker.Item label="Graham Bell" value="Graham Bell" />
                    <Picker.Item label="Edison" value="Edison" />
                </Picker>

                <Text>Question Four: Which regime ruled over Cambodia in 1975?</Text>

            <Picker style= {styles.item}
                    selectedValue={selectedValue}
                    style={{ height: 100, width: 250 }}
                    enabled={setEnableState}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Khmer Rouge" value="Khmer Rouge" />
                    <Picker.Item label="National Liberation Front of North Vietnam" value="National Liberation Front of North Vietnam" />
                    <Picker.Item label="People's Republic of China" value="People's Republic of China" />
                    <Picker.Item label="Soviet Government" value="Soviet Government" />
                </Picker>


                <Text>Question Five: Julius Caesar embarked on a campaign to overtake which region in 58 BC?</Text>

            <Picker style= {styles.item}
                    selectedValue={selectedValue}
                    style={{ height: 100, width: 250 }}
                    enabled={setEnableState}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Britannia" value="Britannia" />
                    <Picker.Item label="Germania" value="Germania" />
                    <Picker.Item label="Gaul" value="Gaul" />
                    <Picker.Item label="Egypt" value="Egypt" />
                </Picker>
            </View>
        )

        

}



const styles = StyleSheet.create({
    container: {
        // why isn't color working?
        color: '#9C27B0',
        flex: 1,
        backgroundColor: '#EFF0F1',
        paddingTop: 20,
        paddingLeft: 10,
    },
    item: {       
        fontSize: 11,
        height: 30,
    }
})

