import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, SafeAreaView, StatusBar, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useUser } from './UserContext';
import { getFoodData, getSearchResults } from '../services/api';
import { router } from 'expo-router';
import BottomNav from '@/components/BottomNav';

const HomeScreen = () => {
    const { user } = useUser();
    const [foodData, setFoodData] = useState([]);
    const [firstSet, setFirstSet] = useState([]);
    const [secondSet, setSecondSet] = useState([]);
    const [thirdSet, setThirdSet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    
    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const data1 = await getFoodData(0); 
                const data2 = await getFoodData(10); 
                const data3 = await getFoodData(20);
                setFirstSet(data1.results);
                setSecondSet(data2.results);
                setThirdSet(data3.results);
            } catch (error) {
                console.error('Failed to fetch food data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFoodData();
    }, []);


    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (search.length > 2) {
                fetchSearchResults(search);
            } else {
                setResults([]);
            }
        }, 300);
        
        return() => clearTimeout(delayDebounceFn);
    }, [search]);

    const fetchSearchResults = async (query) => {
        setLoading(true);
        try {
            const response = await getSearchResults(query);
            setResults(response.results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const data = await getFoodData();
                console.log(data)
                setFoodData(data);
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

    const handleLocalPress = () => {
        router.push('Local_Dishes');
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleFoodDetails(item.id)} style={styles.resultItem} >
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
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for recipes"
                    value={search}
                    onChangeText= {(text) => setSearch(text)} />
                   {search.length > 2 && results.length > 0 ? (
                    <FlatList
                        data={results}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        style={styles.searchResults}
                    /> 
                   ) : (
                    <>
                <Text style={styles.categoryTitle}>Categories</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryButton}>
                    <Image style={styles.categoryIcon} source={require('../assets/images/breakfast.jpg')}/>
                    <Text style={styles.categoryText}>International</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                    <Image style={styles.categoryIcon} source={require('../assets/images/dinner.jpg')}/>    
                    <Text style={styles.categoryText}>Local</Text></TouchableOpacity>
                </ScrollView>
                <Text style={styles.subtitle}>Recommendation</Text>
                <FlatList
                 data={firstSet}
                 renderItem={renderItem}
                 keyExtractor={(item) => item.id.toString()}
                 horizontal
                 showsHorizontalScrollIndicator={false}
               />
               <Text style={styles.subtitle}>Easy To Make</Text>
               <FlatList
                 data={secondSet}
                 renderItem={renderItem}
                 keyExtractor={(item) => item.id.toString()}
                 horizontal
                 showsHorizontalScrollIndicator={false}
               />
               <Text style={styles.subtitle}>Must Try</Text>
               <FlatList
                 data={thirdSet}
                 renderItem={renderItem}
                 keyExtractor={(item) => item.id.toString()}
                 horizontal
                 showsHorizontalScrollIndicator={false}
               />
                </>
            )}
    
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
       flex: 1,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 5,
        marginBottom: 1,
        overflow: 'hidden',
    },
    cardTitle: {
        fontSize: 16,
        color: '#264E36',
        marginBottom: 4,
        fontWeight: 'bold',
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
    searchInput: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        marginBottom: 16,
        borderRadius: 8,
        height: 40,
        fontSize: 16,
        color: '#264E36',
    },
    searchResults: {
        marginBottom: 10,
    },
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc', 
    },
    resultImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 16,
      },
});

export default HomeScreen;
