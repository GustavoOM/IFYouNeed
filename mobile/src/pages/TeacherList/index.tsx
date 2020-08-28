import React, { useState, useEffect } from "react"
import { View, ScrollView, Text, Picker } from "react-native"
import PageHeader from "../../components/PageHeader"
import TeacherItem, {Reinforcement} from "../../components/TeacherItem"
import { BorderlessButton, RectButton } from "react-native-gesture-handler"
import {Feather} from "@expo/vector-icons"
import api from "../../services/api"
import AsyncStorage from "@react-native-community/async-storage"

import styles from "./styles"
import { useFocusEffect } from "@react-navigation/native"


function TeacherList(){
    
    console.log("TeacherList")

    const [reinforcements, setReinforcements] = useState([])
    const [favorites,setFavorites] = useState<string[]>([])

    const [isFiltersVisible, setIsFiltersVisible] = useState(false)

    const [subject, setSubject] = useState("")
    const [week_day, setWeekDay] = useState("")
    const [time, setTime] = useState("")

    async function populateLists(){
        console.log("populateLists")
        const reinforcementsList = await (await api.get("reinforcements")).data
        console.log(reinforcementsList)
        setReinforcements(reinforcementsList)
    }

    function loadFavorites(){
//        AsyncStorage.getItem("favorites").then(response => {
//            if(response){
//                const favoritedReinforcements = JSON.parse(response)
//                const favoritedReinforcementsIds = favoritedReinforcements.map((reinforcement: Reinforcement) => {
//                    return reinforcement.id
//                })
//                setFavorites(favoritedReinforcementsIds)
//            }
//        })
    }
    
    useEffect(() =>{
        populateLists()
    },[])

    useFocusEffect(() =>{
        loadFavorites()
    })

    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible)
    }

    async function handleFilterSubmit(){
//        loadFavorites()
//        const response = await api.get("classes", {
//            params:{
//                subject,
//                week_day,
//                time
//            }
//        })
        setIsFiltersVisible(false)
//        setTeachers(response.data)
    }

    return(
    
        <View style={styles.container}>
            <PageHeader title="Contraturnos disponíveis" headerRight={(
                <BorderlessButton style={{alignItems:"center", flexDirection:"row"}} onPress={handleToggleFiltersVisible}>
                    <Text style={{
                        marginRight: 5,
                        color: "#E3E2E1",
                    }}>Filtrar
                    </Text>
                    <Feather name="filter" size={20} color={"#E3E2E1"} />
                </BorderlessButton>

            )}>
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={subject}
                                style={styles.input}
                                onValueChange={text=> setSubject(text)}
                            >
                                <Picker.Item label="Selecione a matéria" value=""/>
                                <Picker.Item value={"Analise e projetos de sistemas"} label={"Analise e projetos de sistemas"}/>
                                <Picker.Item value={"Arquitetura de computadores"} label = {"Arquitetura de computadores"}/>
                                <Picker.Item value={"Artes"} label={"Artes"}/>
                                <Picker.Item value={"Banco de dados"} label={"Banco de dados"}/>
                                <Picker.Item value={"Bioética e biosegurança"} label={"Bioética e biosegurança"}/>
                                <Picker.Item value={"Biologia"} label={"Biologia"}/>
                                <Picker.Item value={"Biologia molecular"} label={"Biologia molecular"}/>
                                <Picker.Item value={"Bioquímica"} label={"Bioquímica"}/>
                                <Picker.Item value={"Biotecnologia ambiental e agropecuária"} label={"Biotecnologia ambiental e agropecuária"}/>
                                <Picker.Item value={"Biotecnologia de alimentos"} label={"Biotecnologia de alimentos"}/>
                                <Picker.Item value={"Biotecnologia de produtos naturais e biofármacos"} label={"Biotecnologia de produtos naturais e biofármacos"}/>
                                <Picker.Item value={"Biotecnologia industrial"} label={"Biotecnologia industrial"}/>
                                <Picker.Item value={"Controle de qualidade de bioprodutos"} label={"Controle de qualidade de bioprodutos"}/>
                                <Picker.Item value={"Educação física"} label={"Educação física"}/>
                                <Picker.Item value={"Engenharia de software"} label={"Engenharia de software"}/>
                                <Picker.Item value={"Empreendedorismo"} label={"Empreendedorismo"}/>
                                <Picker.Item value={"Espanhol"} label={"Espanhol"}/>
                                <Picker.Item value={"Extração, purificação, isolamento e identificação de bioprodutos"} label={"Extração, purificação, isolamento e identificação de bioprodutos"}/>
                                <Picker.Item value={"Fermentação"} label={"Fermentação"}/>
                                <Picker.Item value={"Filosofia"} label={"Filosofia"}/>
                                <Picker.Item value={"Física"} label={"Física"}/>
                                <Picker.Item value={"Geografia"} label={"Geografia"}/>
                                <Picker.Item value={"História"} label={"História"}/>
                                <Picker.Item value={"Introdução a biotecnologia"} label={"Introdução a biotecnologia"}/>
                                <Picker.Item value={"Introdução a informática"} label={"Introdução a informática"}/>
                                <Picker.Item value={"Interação homem computador"} label={"Interação homem computador"}/>
                                <Picker.Item value={"Inglês"} label={"Inglês"}/>
                                <Picker.Item value={"Linguagem de programação para web"} label={"Linguagem de programação para web"}/>
                                <Picker.Item value={"Lógica e linguagem de programação"} label={"Artes"}/>
                                <Picker.Item value={"Português"} label={"Português"}/>
                                <Picker.Item value={"Matemática"} label={"Matemática"}/>
                                <Picker.Item value={"Metodologia"} label={"Metodologia"}/>
                                <Picker.Item value={"Práticas de laboratório em biologia"} label={"Práticas de laboratório em biologia"}/>
                                <Picker.Item value={"Programação orientada a objetos"} label={"Programação orientada a objetos"}/>
                                <Picker.Item value={"Programação para dispositivos móveis"} label={"Programação para dispositivos móveis"}/>
                                <Picker.Item value={"Projetos"} label={"Projetos"}/>
                                <Picker.Item value={"Química"} label={"Química"}/>
                                <Picker.Item value={"Química orgânica"} label={"Química orgânica"}/>
                                <Picker.Item value={"Redes de computadores"} label={"Redes de computadores"}/>
                                <Picker.Item value={"Sistemas operacionais"} label={"Sistemas operacionais"}/>
                                <Picker.Item value={"Sociologia"} label={"Sociologia"}/>
                                <Picker.Item value={"Tópicos especiais em tecnologia"} label={"Tópicos especiais em tecnologia"}/>
                            </Picker>
                        </View>

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <View style={styles.pickerContainer}>
                                    <Picker
                                        style={styles.input}
                                        selectedValue={week_day}
                                        onValueChange={text=> setWeekDay(text)}
                                    >
                                        <Picker.Item value={""} label={"Qual o dia?"}/>
                                        <Picker.Item value={"1"} label={"Segunda-feira"}/>
                                        <Picker.Item value={"2"} label={"Terça-feira"}/>
                                        <Picker.Item value={"3"} label={"Quarta-feira"}/>
                                        <Picker.Item value={"4"} label={"Quinta-feira"}/>
                                        <Picker.Item value={"5"} label={"Sexta-feira"}/>
                                    </Picker>
                                </View>
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Período</Text>
                                <View style={styles.pickerContainer}>
                                    <Picker
                                        style={styles.input} 
                                        selectedValue={time}
                                        onValueChange={text=> setTime(text)}
                                    >
                                        <Picker.Item value={""} label={"Qual o período?"}/>
                                        <Picker.Item value={0} label={"Manhã"}/>
                                        <Picker.Item value={1} label={"Tarde"}/>
                                        <Picker.Item value={2} label={"Noite"}/>
                                    </Picker>
                                </View>
                            </View>
                        </View>
                        <RectButton style={styles.submitButton}onPress={handleFilterSubmit}>
                            <Text style={styles.submitButtonText} >Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }} >
                {reinforcements.map((reinforcement: Reinforcement) => {
                    console.log(reinforcement.id_reinforcement)
                    return(
                        <TeacherItem
                            key={reinforcement.id_reinforcement}
                            reinforcement={reinforcement}
                            favorited={favorites.includes(reinforcement.id_reinforcement)}
                        />
                    )
                })}
                
                

            </ScrollView>
        </View>
    )
}

export default TeacherList