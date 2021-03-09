import React, { useState} from 'react'

import { View, Text, SafeAreaView, Image, TouchableOpacity, Touchable, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { booksArray, booksRecomended } from '../data/BookData';
import {COLORS, FONTS, SIZES, icons, images, SHADOWS } from '../constants'
const Home = ({navigation}) => {
    
    const [ myBooks, setMyBooks ] = useState(booksArray)
    const [ bookList, setBookList ] = useState(booksRecomended)


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

    const renderItem = ({ item, index }) => {
        return(
            <TouchableOpacity style={{flex: 1,
            marginLeft: index === 0 ? SIZES.padding : 0,
            marginRight: SIZES.base
            }}
            onPress={() => navigation.navigate('BookDetail', {book: item})}
            >
                {/*Tapa libro*/}
                <View>
                    <Image 
                    resizeMode='contain'
                    source={item.bookCover} 
                    style={{width: 150, height: 250, borderRadius: SIZES.radius}} />
                </View>
            </TouchableOpacity>
        )
    }

    const renderMyBooksSection = (myBooks) => {
        return(
          
            <View style={{flex: 1}}>
                 {/*Header*/}
                <View style={{paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between', marginTop: SIZES.base}}>
                    <Text style={{...FONTS.body2, color: COLORS.white}}>Recomendados para vos</Text>
                    <TouchableOpacity style={{marginTop: SIZES.base}}>
                        <Text style={{...FONTS.body3, color: COLORS.lightGray, textDecorationLine: 'underline'}}>Ver más...</Text>
                    </TouchableOpacity>
                </View>

                {/*Books*/}
                <View style={{flex: 1, marginTop: SIZES.padding}}>
                    <FlatList 
                    horizontal
                    contentContainerStyle={{marginTop: SIZES.base}}
                    showsHorizontalScrollIndicator={false}
                    data={myBooks}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}/>
                </View>
            </View>
        )
    }

    const renderCategoriesItem = (bookList) => {
        const renderItem = ({ item }) => {
            return(
                <ScrollView style={{ marginTop: SIZES.base, flex: 1}}> 
                <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <Image source={item.bookCover}
                        resizeMode='contain'
                        style={{width: 100, height: 180, flex: 1, borderRadius: SIZES.base}}
                        />
                    </View>
                        <View style={{flex: 1 , marginTop: SIZES.radius, marginHorizontal: SIZES.base}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                <Text style={{...FONTS.body3, color: COLORS.white, fontWeight: '300'}}>{item.bookName}</Text>
                                <Image source={icons.bookmark_icon}
                                resizeMode='contain'
                                style={{height: 25, width: 25, tintColor: COLORS.lightGray, marginTop: SIZES.base}}
                                />
                                </View>


                                <Text style={{...FONTS.body4, color: COLORS.lightGray4}}>{item.author}</Text>
                            <View style={{flexDirection: 'row', marginTop: SIZES.base}}>
                                <Image source={icons.page_filled_icon}
                                resizeMode='contain'
                                style={{width: 25, height: 25, tintColor: COLORS.lightGray}}
                                />
                                <Text style ={{...FONTS.body3, color: COLORS.lightGray4, marginLeft: SIZES.base}}>{item.pages} páginas</Text>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginRight: SIZES.base, backgroundColor: COLORS.lightCoral, borderRadius: SIZES.radius, padding: 3, marginTop: SIZES.base, ...FONTS.body3}}>{item.genre[0]}</Text>
                                <Text style={{marginRight: SIZES.base, backgroundColor: COLORS.lightCoral, borderRadius: SIZES.radius, padding: 3, marginTop: SIZES.base, ...FONTS.body3}}>{item.genre[1]}</Text>
                                {item.genre.length === 3 &&
                                <Text style={{marginRight: SIZES.base, backgroundColor: COLORS.lightCoral, borderRadius: SIZES.radius, padding: 3, marginTop: SIZES.base, ...FONTS.body3}}>{item.genre[2]}</Text>
                                }
                            </View>

                            <View style={{marginVertical: SIZES.base}}
                            >
                                <TouchableOpacity 
                                style={{backgroundColor: COLORS.pink, height: 25, width: 115, 
                                justifyContent: 'center', alignItems: 'center', borderRadius: SIZES.radius}}
                                onPress={() => navigation.navigate('BookDetail', {book: item})}
                                >
                                    <Text style={{...FONTS.body3, color: COLORS.white, fontWeight: 'bold'}}>Ver más</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </TouchableOpacity>
                </ScrollView>
            )
        }
        return(
            <View style={{paddingLeft: SIZES.padding}}>
                <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
                   
                        <Text style={{...FONTS.body3, color: COLORS.white, fontWeight: 'bold'}}>Best Seller</Text>
                 
                        <Text style={{...FONTS.body3, color: COLORS.lightGray, fontWeight: 'bold'}}>Novedades</Text>
                   
                        <Text style={{...FONTS.body3, color: COLORS.lightGray, fontWeight: 'bold'}}>Próximamente</Text>
                   
                </View>
               
                <FlatList
                data={bookList}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginTop: SIZES.base, marginBottom: SIZES.base}}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                />
                
            </View>
        )
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
                <View style={{marginTop: SIZES.padding}}>
                    {renderCategoriesItem(bookList)}
                </View>

            </ScrollView>
        </SafeAreaView>
            
    )
}

export default Home;

