import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FeedItem from '../../../components/FeedItem/FeedItem'

export default function Home() {

  let feedItems = [
    {
      id: '1',
      video: 'https://i.imgur.com/MmDMYQQ.mp4',
      name: '@animals',
      description: 'Meow meow'
    },
    {
      id: '2',
      video: 'https://i.imgur.com/Z6gaZ2A.mp4',
      name: '@animals',
      description: 'his horse must be winning!'
    },
    {
      id: '3',
      video: 'https://i.imgur.com/ohv4IxA.mp4',
      name: '@cats',
      description: 'Hey, Look at me!'
    },
    {
      id: '4',
      video: 'https://i.imgur.com/jbwiIel.mp4',
      name: '@dogs',
      description: 'A photo of my dog Panko every day'
    },
  ]


  const [showItem, setShowItem] = useState(feedItems[0])
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setShowItem(feedItems[viewableItems[0].index])
    }
  })


  return (
    <View style={styles.container}>

      <View style={styles.labels}>
        <TouchableOpacity>
          <Text style={styles.labelText}>Seguindo</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.labelText, styles.labelSelectedText]}>Para Você</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={feedItems}
        renderItem={({ item }) => <FeedItem data={item} currentShowItem={showItem} />}
        onViewableItemsChanged={onViewRef.current}
        snapToAlignment='center'
        snapToInterval={Dimensions.get('screen').height}
        scrollEventThrottle={200}
        decelerationRate='fast'
        viewabilityConfig={{
          waitForInteraction: false,
          viewAreaCoveragePercentThreshold: 100
        }}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  labels: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'absolute',
    top: 6,
    left: 0,
    right: 0,
    zIndex: 99,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 60
  },
  labelText: {
    color: '#DDD',
    fontSize: 16,
    marginBottom: 2
  },
  labelSelectedText: {
    color: '#fff',
    fontWeight: '500',
  }
})
