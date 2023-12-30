import React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';

const Home = ({ theme }) => {
  const keyFeatures = [
    'Explore diverse stock categories and sectors',
    'Craft your customized dashboard',
    'Experience real-time data visualization with interactive charts',
    'Tailor your experience with customizable settings',
  ];

  const styles = {
    light: {
      textColor: '#000000',
      headerColor: '#1890ff',
      backgroundImage: require('../assets/Stockmarket.png'),
    }
  };

  const selectedStyles = styles[theme] || styles.light;

  return (
    <ImageBackground source={selectedStyles.backgroundImage} style={{ flex: 1, resizeMode: 'cover' }}>
      <View style={{ backgroundColor: selectedStyles.headerColor, paddingVertical: 20, alignItems: 'center' }}>
        <Text style={{ color: selectedStyles.textColor, fontSize: 20, fontWeight: 'bold' }}>Welcome to the Stock Market Dashboard!</Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 20, alignItems: 'center' }}>
        <Text style={{ color: selectedStyles.textColor, fontSize: 16 }}>
          The Stock Market Dashboard is an interactive platform designed to provide users with real-time stock market data and powerful analysis tools.
        </Text>
        <Text style={{ color: selectedStyles.textColor, fontSize: 18, fontWeight: 'bold' }}>Key Features:</Text>
        <View style={{ marginTop: 10, borderWidth: 1, borderColor: selectedStyles.headerColor, borderRadius: 5 }}>
          {keyFeatures.map((feature, index) => (
            <View key={index} style={{ flexDirection: 'row', marginBottom: 5, paddingHorizontal: 10, paddingVertical: 5 }}>
              <Text style={{ color: selectedStyles.textColor, fontSize: 16 }}>{feature}</Text>
            </View>
          ))}
        </View>
        <Text style={{ color: selectedStyles.textColor, fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Explore Now:</Text>
        <Text style={{ color: selectedStyles.textColor, fontSize: 16 }}>Embark on your journey by delving into what our platform has to offer</Text>
      </View>
    </ImageBackground>
  );
};

export default Home;
