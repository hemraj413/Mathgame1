import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import React, { useRef, useState } from 'react'

const index = () => {
    const texts = useRef(null);

    const[firnum,setFirnum]=useState('?')
    const[secnum,setsecnum]=useState('?')
    const[thirdnum,setThirdnum]=useState('?')
    const[fornum,setFornum]=useState('?')

    const levels =[
        {id:1, question:`${firnum} + ${secnum} + ${thirdnum}`, answer:"10", optionNum:["5","1","4"]},
        {id:2, question:`${firnum} - ${secnum} + ${thirdnum}`, answer:"0", optionNum:["6","2","4"]}

    ]
    let optionsLength = 3
    let currentQuestion = 1


    let textValue = `${levels[currentQuestion].question} = ${levels[currentQuestion].answer}` //to keep track which number is clicked

    //handle next btn
    function handlePress(){
        if(levels[currentQuestion].optionNum.length==3){
        if(firnum !== "?" && secnum !== "?" && thirdnum !== "?" ){
            const userValue = eval(levels[currentQuestion].question)
            console.log(userValue)
            if(userValue == levels[currentQuestion].answer){
                alert("you're right")
                
            }
            setFirnum("?")
            setsecnum("?")
            setThirdnum("?")
            setFornum("?")        
        }}
        if(levels[currentQuestion].optionNum.length==4){
            if(firnum !== "?" && secnum !== "?" && thirdnum !== "?" && fornum !=='?' ){
                const userValue = eval(levels[currentQuestion].question)
                console.log(userValue)
                if(userValue == levels[currentQuestion].answer){
                    alert("you're right")
                    
                }
                setFirnum("?")
                setsecnum("?")
                setThirdnum("?")
                setFornum("?")        
            }}
        else{
                setFirnum("?")
                setsecnum("?")
                setThirdnum("?")
                setFornum("?")
    }}
    
    // to select selected number in the field
    function btnFirst(){
        if(firnum =='?' && secnum =='?' && thirdnum =='?'){
            setFirnum(levels[currentQuestion].optionNum[0])
        }else if(firnum !=='?'&& firnum !== levels[currentQuestion].optionNum[0] && secnum =='?' && thirdnum =='?'){
            setsecnum(levels[currentQuestion].optionNum[0])
        }
        else if(firnum !=='?' && firnum !== levels[currentQuestion].optionNum[0] && secnum !=='?' && secnum !== levels[currentQuestion].optionNum[0]  && thirdnum =='?'){
            setThirdnum(levels[currentQuestion].optionNum[0])
        }else{
            setFornum(levels[currentQuestion].optionNum[0])
        }
    }
    function btnSec(){
        if(firnum =='?'&& secnum =='?' && thirdnum =='?'){
            setFirnum(levels[currentQuestion].optionNum[1])
        }else if(firnum !=='?'  && firnum !== levels[currentQuestion].optionNum[1] && secnum =='?' && thirdnum =='?'){
            setsecnum(levels[currentQuestion].optionNum[1])
        }
        else if(firnum !=='?' && firnum !== levels[currentQuestion].optionNum[1] && secnum !=='?' && secnum !== levels[currentQuestion].optionNum[1] && thirdnum =='?'){
            setThirdnum(levels[currentQuestion].optionNum[1])
        }else{
            setFornum(levels[currentQuestion].optionNum[1])
        }
    }
    function btnThird(){
        if(firnum =='?'&& secnum =='?' && thirdnum =='?'){
            setFirnum(levels[currentQuestion].optionNum[2])
        }else if(firnum !=='?' && firnum !== levels[currentQuestion].optionNum[2] && secnum =='?' && thirdnum =='?'){
            setsecnum(levels[currentQuestion].optionNum[2])
        }
        else if(firnum !=='?'&& firnum !== levels[currentQuestion].optionNum[2] && secnum !=='?' && secnum !== levels[currentQuestion].optionNum[2] && thirdnum =='?'){
            setThirdnum(levels[currentQuestion].optionNum[2])
        }else{
            setFornum(levels[currentQuestion].optionNum[2])
        }
    }
    function btnFor(){
        if(firnum =='?'&& secnum =='?' && thirdnum =='?'){
            setFirnum(levels[currentQuestion].optionNum[3])
        }else if(firnum !=='?'&& firnum !== levels[currentQuestion].optionNum[3] && secnum =='?' && thirdnum =='?'){
            setsecnum(levels[currentQuestion].optionNum[3])
        }
        else if(firnum !=='?'&& firnum !== levels[currentQuestion].optionNum[3] && secnum !=='?' && secnum !== levels[currentQuestion].optionNum[3] && thirdnum =='?'){
            setThirdnum(levels[currentQuestion].optionNum[3])
        }else{
            setFornum(levels[currentQuestion].optionNum[3])
        }
    }
  return (
    <View style={styles.container}>
        <View style={{marginTop:"50%"}}>
        <Text style={styles.question} ref={texts}>{textValue}</Text>
        </View>
            {
            optionsLength == 3?(
                <View style={styles.optionsDiv}>
                <Text style={styles.optionNum} onPress={btnFirst}>{levels[currentQuestion].optionNum[0]}</Text>
                <Text style={styles.optionNum} onPress={btnSec}>{levels[currentQuestion].optionNum[1]}</Text>
                <Text style={styles.optionNum} onPress={btnThird}>{levels[currentQuestion].optionNum[2]}</Text>

                    </View>
            ):(
                <View style={styles.optionsDiv}>
                <Text style={styles.optionNum} onPress={btnFirst}>{levels[currentQuestion].optionNum[0]}</Text>
                <Text style={styles.optionNum} onPress={btnSec}>{levels[currentQuestion].optionNum[1]}</Text>
                <Text style={styles.optionNum} onPress={btnThird}>{levels[currentQuestion].optionNum[2]}</Text>
                <Text style={styles.optionNum} onPress={btnFor}>{levels[currentQuestion].optionNum[3]}</Text>
                </View>
            )
        }
        <Button title='next' onPress={handlePress}/>
    </View>
  )
}
    const styles = StyleSheet.create({
        container:{
            maxWidth:"100%",
            maxHeight:"100%",
            flex:1,
            justifyContent:"center",
            alignItems:"center",
        },
        question:{
            fontSize:30
        },
        optionsDiv:{
            flexDirection:"row",
        },
        optionNum:{
            fontSize:30,
            margin:10
        }
    })

    

export default index