import React, { useState, useEffect } from "react"
import {View, Image, Text, ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RectButton } from "react-native-gesture-handler"


import PageHeader from "../../components/PageHeader"
import landingImg from "../../assets/images/landing.png" 
import studyIcon from "../../assets/images/icons/study.png"
import giveClassesIcon from "../../assets/images/icons/give-classes.png"
import heartICon from "../../assets/images/icons/heart.png"
import api from "../../services/api"

import CardAchadosPerdidos from "../../assets/images/CardAchadosPerdidos.png" 
import CardCaronaColetiva from "../../assets/images/CardCaronaColetiva.png"
import CardContraturno from "../../assets/images/CardContraturno.png" 
import CardDescubraProjetos from "../../assets/images/CardDescubraProjetos.png" 
import CardHorárioDeAulas from "../../assets/images/CardHorárioDeAulas.png" 
import CardServidoresDoIFPR from "../../assets/images/CardServidoresDoIFPR.png" 
import HeaderLogo from "../../assets/images/HeaderLogo.png" 
import ImagemPerfilExemplo from "../../assets/images/ImagemPerfilExemplo.png" 
import Logo from "../../assets/images/Logo.png" 


import styles from "./styles"
import PageHeaderPrincipal from "../../components/PageHeaderPrincipal"
function Landing(){
    const {navigate} = useNavigation()
    
    function handleNavigateToGiveClassesPage(){
        navigate("GiveClasses")
    }

    function handleNavigateToStudyPages(){
        navigate("Study")
    }

    return (
        <>
            <PageHeaderPrincipal title={"O que você precisa?"}/>
            <View style={styles.container}>
                <ScrollView style={styles.cardList}>
                    <RectButton onPress={handleNavigateToStudyPages}>
                        <Image style={styles.card} source={CardContraturno}/>
                    </RectButton>
                    <RectButton onPress={handleNavigateToGiveClassesPage}>
                        <Image style={styles.card} source={CardServidoresDoIFPR}/>
                    </RectButton>
                    <RectButton onPress={handleNavigateToGiveClassesPage}>
                        <Image style={styles.card} source={CardHorárioDeAulas}/>
                    </RectButton>
                    <RectButton onPress={handleNavigateToGiveClassesPage}>
                        <Image style={styles.card} source={CardAchadosPerdidos}/>
                    </RectButton>
                    <RectButton onPress={handleNavigateToGiveClassesPage}>
                        <Image style={styles.card} source={CardDescubraProjetos}/>
                    </RectButton>
                    <RectButton onPress={handleNavigateToGiveClassesPage}>
                        <Image style={styles.card} source={CardCaronaColetiva}/>
                    </RectButton>
                </ScrollView>
            </View>
        </>
    )
}

export default Landing