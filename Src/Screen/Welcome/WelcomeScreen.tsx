import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  ViewToken,
  StatusBar,
  ImageSourcePropType,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Style';

const img1 = require('../../../assets/images/img1.png');
const img2 = require('../../../assets/images/img2.png');
const img3 = require('../../../assets/images/img3.png');
const img4 = require('../../../assets/images/img4.png');
const img5 = require('../../../assets/images/img5.png');
const bgPattern = require('../../../assets/images/baground.png');

const { width } = Dimensions.get('window');

interface SlideItem {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

const slides: SlideItem[] = [
  {
    id: '1',
    title: 'Effortless Booking',
    description:
      'Manage appointments and \n staff schedules with a\n seamless calendar system',
    image: img1,
  },
  {
    id: '2',
    title: 'Smart Inventory',
    description:
      'Track products in real-time \n and get automated low-stock\n alerts',
    image: img2,
  },
  {
    id: '3',
    title: 'Integrated Payments',
    description:
      'Securely accept online \n payments and manage\nautomated employee payouts',
    image: img3,
  },
  {
    id: '4',
    title: 'Insightful Analytics',
    description:
      'Get detailed financial reports\n and growth insights to stay\n profitable',
    image: img4,
  },
  {
    id: '5',
    title: 'Your Brand, Your Way',
    description:
      'Customize the app with your\n own logo and colors\n effortlessly',
    image: img5,
  },
];

interface WelcomeProps {
  navigation?: any;
}

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList<SlideItem>>(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setCurrentIndex(viewableItems[0].index!);
      }
    },
  );

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 });

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation?.navigate('login'); //  Get Started → login
    }
  };

  const handleSkip = () => navigation?.navigate('login'); //  Skip → login

  const isLastSlide = currentIndex === slides.length - 1;

  const renderItem = ({ item }: { item: SlideItem }) => (
    <ImageBackground source={bgPattern} style={styles.slide} resizeMode="cover">
      {/* Hero image */}
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['transparent', '#F5F5F7']}
          style={styles.imageGradient}
        />
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        {/* Pagination dots */}
        <View style={styles.paginationContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </View>

      {/* Skip button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Next / Get Started */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={isLastSlide ? () => navigation?.navigate('login') : handleNext} // ✅
      >
        <Text style={styles.nextButtonText}>
          {isLastSlide ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        bounces={false}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};

export default Welcome;
