import React, { useState} from 'react'

import { View, Text, SafeAreaView, Image, TouchableOpacity, Touchable, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { booksArray } from '../data/BookData';
import {COLORS, FONTS, SIZES, icons, images, SHADOWS } from '../constants'
const Home = () => {
    
    const [ myBooks, setMyBooks ] = useState(booksArray)
    const renderHeader = (profile) => {
        return(
            <>
            {/*Left side*/}
            <View style={{flex: 1,   
                marginTop: SIZES.padding,
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: SIZES.base,
                }}>
                    <View style={{flex: 1}}>
                        <Text style={{...FONTS.h2, color: COLORS.white}}>Bienvenido/a !</Text>
                        <Text style={{...FONTS.h3, color: COLORS.white}}>Username</Text>
                    </View>
            {/*Right side*/}

            <TouchableOpacity style={{
                    backgroundColor: COLORS.primary,
                    paddingLeft: 5,
                    paddingRight: SIZES.radius,
                    borderRadius: SIZES.radius * 1.5,
                    height: 40,   
                    width: 100,
                    flexDirection: 'row',
                }}
                    onPress={() => console.log('Hi')}
                    >
                        <View style={{
                            flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                        }}>
                            <View>

                            <Text style={{...FONTS.h4, color: 
                                COLORS.white, 
                                fontWeight: 'bold'}}>
                                    <Icon name="user-circle" size={20} color={COLORS.secondary} />
                                    Mi cuenta
                            </Text>
                            </View>
                        </View>
                </TouchableOpacity>
            </View>

          
            

         
            </>
        )
    }

    const Divider = () => {
        return(
            <View style={{ width: 1, paddingVertical: SIZES.padding}}>
                <View style={{flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1}}></View>
            </View>
            )
    }

    const renderButtonSection = () => {
        return (
            <View style={{flex: 1, justifyContent: 'center', padding: SIZES.padding}}>
               <View style={{flexDirection: 'row', height: 70, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius
            }}>
                {/*Inicio*/}
                <TouchableOpacity style={{flex: 1}}
                onPress={() => console.log('Inicio')}
                >
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={icons.claim_icon}
                        resizeMode='contain'
                        style={{width: 30, height: 30}}
                        />
                        <Text style={{...FONTS.body2, color: COLORS.white,  paddingLeft: 3}}>Inicio</Text>
                    </View>
                </TouchableOpacity>
                {/*Divider*/}
                <Divider />
                {/*Buscar*/}
                <TouchableOpacity style={{flex: 1}}
                onPress={() => console.log('Buscar')}
                >
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={icons.search_icon}
                        resizeMode='contain'
                        style={{width: 25, height: 25}}
                        />
                        <Text style={{...FONTS.body2, color: COLORS.white, paddingLeft: 3}}>Buscar</Text>
                    </View>

                </TouchableOpacity>
                {/*Divider*/}
                <Divider />
                {/*Mis pagos*/}
                <TouchableOpacity style={{flex: 1}}
                onPress={() => console.log('Pagos')}
                >
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={icons.card_icon}
                        resizeMode='contain'
                        style={{width: 30, height: 30}}
                        />
                        <Text style={{...FONTS.body2, color: COLORS.white,  paddingLeft: 3}}>Pagos</Text>
                    </View>
                    </TouchableOpacity>
               </View>
            </View>
        )
    }

    const renderMyBooksSection = (books) => {

    }

    return (
        <SafeAreaView style={{
        flex: 1, 
        backgroundColor: COLORS.black,    
        }}>
            <View style={{height: 200}}>
            {/*Header section*/}
            {renderHeader()}
            {renderButtonSection()}
            </View>

            {/*Body section*/}
            <ScrollView style={{marginTOp: SIZES.radius}}>
                {/*Book section*/}
                <View>
                {renderMyBooksSection(myBooks)}
                </View>
                {/*Category section*/}
                <View>

                </View>

            </ScrollView>
        </SafeAreaView>
            
    )
}

export default Home;

