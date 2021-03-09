import React, { useEffect, useState } from 'react'

import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
const BookDetails = ({ route, navigation }) => {

    const [book, setBook] = useState(null)

    useEffect(() => {
        let { book } = route.params
        setBook(book)
        return () => {
            setBook(null)
        }
    }, [book])

    function renderBookInfoSection(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground source={book.bookCover} style={{
                    position: 'absolute', top: 0, left: 0,bottom: 0, right: 0,
                }} resizeMode='cover'/>
                <View
                style={{position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: book.backgroundColor}}>
                </View>


                {/*Navigation header*/}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', 
                paddingHorizontal: SIZES.radius, alignItems: 'center', height: 80,
                paddinVertical: SIZES.radius}}>
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}>

                    <Image source={icons.back_arrow_icon}
                    style={{width: 25, height: 25, tintColor: COLORS.black}}
                    resizeMode='contain'
                    />
                    </TouchableOpacity>
                    <Text style={{...FONTS.body3, color: COLORS.black, fontWeight: 'bold'}}>Detail book</Text>
                    <Image source={icons.more_icon}
                    style={{width: 25, height: 25, tintColor: COLORS.black}}
                    resizeMode='contain'
                    />
                </View>

                {/*Book cover*/}
                <View style={{flex: 5, paddingTop: SIZES.padding2, alignItems: 'center'}}>
                    <Image source={book.bookCover}
                    style={{flex: 1, width: 150, height: 'auto'}}
                    resizeMode='contain'
                    />
                </View>
                {/*Title and author*/}
                <View style={{flex: 1.8, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{...FONTS.h2, color: COLORS.pink}}>{book.bookName}</Text>
                    <Text style={{...FONTS.body2, color: COLORS.white}}>{book.author}</Text>
                </View>

                {/*Book info*/}
                <View style={{
                    flexDirection: 'row', paddingVertical: 20, margin: SIZES.padding, borderRadius: SIZES.radius,
                    backgroundColor: 'rgba(0,0,0,0.3)'
                }}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{...FONTS.h3, color: COLORS.white}}>{book.rating}
                        <Icon name="star" size={20} color={COLORS.white} />
                        </Text>
                        <Text style={{...FONTS.h3, color: COLORS.white}}>valoraciones</Text>
                    </View>

                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{...FONTS.h3, color: COLORS.white}}>{book.pages}
                        <Icon name="file" size={20} color={COLORS.white} />
                        </Text>
                        <Text style={{...FONTS.h3, color: COLORS.white}}>páginas</Text>
                    </View>

                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{...FONTS.h3, color: COLORS.white}}>{book.language}
                    
                        </Text>
                        <Text style={{...FONTS.h3, color: COLORS.white}}>Lenguaje</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderBookDescription(){
        return(
            <ScrollView contentContainerStyle={{ paddingHorizontal: SIZES.padding2}}>
                <Text style={{...FONTS.h2, color: COLORS.white, marginVertical: SIZES.padding}}>Description</Text>
                <Text style={{...FONTS.body3, color: COLORS.lightGray}}>{book.description}</Text>
            </ScrollView>
        )
    }
    if(book){
        return (
            <View style={{flex: 1, backgroundColor: COLORS.black}}>
                <View style={{flex: 4}}>
                    {renderBookInfoSection()}
                </View>

                <View style={{flex: 2}}>
                    {renderBookDescription()}
                </View>

                <View style={{height: 72}}>
                    
                </View>
            </View>
        )
    } else {
        return (<View></View>)
    }
   
}

export default BookDetails;
