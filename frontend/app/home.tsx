import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, SafeAreaView, StatusBar, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useUser } from './UserContext';
import { getFoodData } from '../services/api';
import { router } from 'expo-router';
import BottomNav from '@/components/BottomNav';

const HomeScreen = () => {
    const { user } = useUser();
    const [foodData, setFoodData] = useState([]);
    const [foodData2, setFoodData2] = useState([]);
    const [foodData3, setFoodData3] = useState([]);
    const [foodData4, setFoodData4] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const data = await getFoodData(0);
                const data2 = await getFoodData(30);
                const data3 = await getFoodData(60);
                const data4 = await getFoodData(90);
                setFoodData(data.results);
                setFoodData2(data2.results);
                setFoodData3(data3.results);
                setFoodData4(data4.results);
            } catch (error) {
                console.error('Failed to fetch food data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFoodData();
    }, []);

    const handleFoodDetails = (id) => {
        router.push(`/details?id=${id}`);
    };

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleFoodDetails(item.id)}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>What would you like to cook today, <Text style={styles.name}>{user?.name}</Text>?</Text>
                <Text style={styles.categoryTitle}>Categories</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryButton}>
                    <Image style={styles.categoryIcon} source={require('../assets/images/breakfast.jpg')}/>
                    <Text style={styles.categoryText}>Breakfast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                    <Image style={styles.categoryIcon} source={require('../assets/images/lunch.jpg')}/>    
                    <Text style={styles.categoryText}>Lunch</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                    <Image style={styles.categoryIcon} source={require('../assets/images/dinner.jpg')}/>    
                    <Text style={styles.categoryText}>Dinner</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                    <Image style={styles.categoryIcon} source={require('../assets/images/dessert.jpg')}/>    
                    <Text style={styles.categoryText}>Dessert</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                    <Image style={styles.categoryIcon} source={require('../assets/images/snack.jpg')}/>    
                    <Text style={styles.categoryText}>Snack</Text></TouchableOpacity>
                </ScrollView>
                <Text style={styles.subtitle}>Recommendation</Text>
                <FlatList
                    data={foodData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollContainer}
                />
                <Text style={styles.subtitle}>Want some of these?</Text>
               <FlatList
                   data={foodData2}
                   renderItem={renderItem}
                   keyExtractor={(item) => item.id.toString()}
                   horizontal
                   showsHorizontalScrollIndicator={false}
                   style={styles.scrollContainer}
               />
              <Text style={styles.subtitle}>Easy to make</Text>
              <FlatList
                  data={foodData3}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.scrollContainer}
              />
             <Text style={styles.subtitle}>Must try</Text>
             <FlatList
                 data={foodData4}
                 renderItem={renderItem}
                 keyExtractor={(item) => item.id.toString()}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 style={styles.scrollContainer}
             />
            </ScrollView>
            <BottomNav />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4EF',
        padding: 16,
        marginTop: StatusBar.currentHeight,
    },
    title: {
        fontSize: 18,
        color: '#264E36',
        marginBottom: 16,
    },
    name: {
        fontSize: 20,
        color: '#264E36',
        fontWeight: 'bold',
    },
    categoryTitle: {
        fontSize: 22,
        color: '#264E36',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    categoryButton: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginRight: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryText: {
        fontSize: 16,
        color: '#264E36',
    },
    subtitle: {
        fontSize: 18,
        color: '#264E36',
        marginBottom: 16,
    },
    scrollContainer: {
        marginBottom: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginRight: 16,
        width: 200,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },
    cardTitle: {
        fontSize: 16,
        color: '#264E36',
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 14,
        color: '#767676',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryIcon: {
        width: 30,
        height: 30,
        borderRadius: 10,
        marginVertical: 1,

    },
});

export default HomeScreen;
