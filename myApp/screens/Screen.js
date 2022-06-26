import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImageInputList from '../components/ImageInputList'
import { Searchbar } from 'react-native-paper';
const Screen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.box}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>
    );
};

export default Screen;
const styles = StyleSheet.create({
    box: {
        paddingTop: 100,
        paddingHorizontal: 20
    }
});