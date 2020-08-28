import React, { useState } from "react"
import { View, Image, Text, Linking } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import AsyncStorage from "@react-native-community/async-storage"

import convertMinutesToHour from "../../utils/convertMinutesToHour"
import heartOutlineIcon from "../../assets/images/icons/heart-outline.png"
import unfavouriteIcon from "../../assets/images/icons/unfavorite.png"
import whatsappIcon from "../../assets/images/icons/whatsapp.png"
import gmail from "../../assets/images/icons/gmail.png"

import styles from "./styles"


export interface Reinforcement{
    id_reinforcement: string
    subject: string
    principal_year: string
    course: string
    week_day: number
    from:string
    to:string
    place:string
    reinforcement_bio: string
    user_id:string
    created_at:string
    updated_at:string
    bio: string
    name: string
    avatar: string
    whatsapp: string
    email: string
}
interface CardItemProps{
    reinforcement: Reinforcement
    favorited: boolean
}

const TeacherItem: React.FC<CardItemProps> = ({ reinforcement, favorited}) => {

    const week_dayConversor = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"]

    const [isFavorited, setIsfavorited] = useState(favorited)

    function handleLinkToWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${reinforcement.whatsapp }`)
    }

    async function handleToggleFavorite(){
        const favorites = await AsyncStorage.getItem('favorites')

        let favoritesArray = []

        if(favorites){
            favoritesArray = JSON.parse(favorites)
        }
        
        if(isFavorited){
            const favoriteIndex = favoritesArray.findIndex((reinforcementItem: Reinforcement) => {
                return reinforcementItem.id_reinforcement === reinforcement.id_reinforcement
            })
            favoritesArray.splice(favoriteIndex,1)
            setIsfavorited(false)

        }else{
            favoritesArray.push(reinforcement)

            setIsfavorited(true)
        }
        await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray))
    }
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.profileInfo}>
                    <Text style={styles.subject}>{`${reinforcement.subject} - ${reinforcement.principal_year}º ano ${reinforcement.course}`}</Text>
                    <Text style={styles.name}>{reinforcement.name}</Text>
                </View>
            </View>
            <View style={styles.bioContainer}>
                <Image style={styles.avatar} source={{uri: reinforcement.avatar}}/>
                <Text style={styles.bio} >{reinforcement.reinforcement_bio}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    {`${week_dayConversor[reinforcement.week_day]}-feira / `}
                    <Text  style={styles.priceValue} >
                        {convertMinutesToHour(Number(reinforcement.from))} - {convertMinutesToHour(Number(reinforcement.to))}
                    </Text>
                </Text>
                <Text style={styles.price}>
                    <Text  style={styles.priceValue} >
                        {reinforcement.place}
                    </Text>
                </Text>
                <View style={styles.buttonsContainer} >
                    <RectButton onPress={handleToggleFavorite} style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}>
                        {isFavorited ? <Image source={unfavouriteIcon}/> : <Image source={heartOutlineIcon}/>}
                    </RectButton>
                    <RectButton style={styles.contactMailButton} onPress={handleLinkToWhatsapp}>
                        <Image source={gmail}/>
                        <Text style={styles.contactButtonText}>E-mail</Text>
                    </RectButton>
                    {!reinforcement.whatsapp ? <RectButton style={styles.contactWhatsappButton} onPress={handleLinkToWhatsapp}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Whatsapp</Text>
                    </RectButton> : <></>}
                    
                </View>
            </View>
        </View>
    )
}

export default TeacherItem