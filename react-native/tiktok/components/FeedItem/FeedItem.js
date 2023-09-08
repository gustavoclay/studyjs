import { Ionicons } from '@expo/vector-icons'
import { Video } from 'expo-av'
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { height: heightScreen } = Dimensions.get("screen")


export default function FeedItem({ data, currentShowItem }) {


  useEffect(() => {
    if (currentShowItem?.id === data?.id) {
      video.current?.playAsync()
    } else {
      video.current?.pauseAsync()
    }

  }, [currentShowItem])



  const video = useRef(null)
  const [status, setStatus] = useState({})

  function handlePlayer() {
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
  }

  return (
    <Pressable onPress={handlePlayer} >


      <View style={styles.info}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{data?.description}</Text>
      </View>

      <View style={styles.actions}>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart" size={30} color="#fff" />
          <Text style={styles.actionText}>30.3k</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-ellipses" size={30} color="#fff" />
          <Text style={styles.actionText}>23</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="bookmark" size={30} color="#fff" />
        </TouchableOpacity>

      </View>

      <Video
        ref={video}
        style={{ width: '100%', height: heightScreen }}
        source={{ uri: data?.video }}
        resizeMode='cover'
        shouldPlay={false}
        isMuted={false}
        isLooping={true}
        onPlaybackStatusUpdate={status => setStatus(status)}
      />


    </Pressable>
  )
}

const styles = StyleSheet.create({
  info: {
    position: 'absolute',
    zIndex: 99,
    left: 8,
    padding: 8,
    bottom: 100
  },
  name: {
    color: '#fff',
    fontWeight: '500',
    marginBottom: 4,
    textShadowColor: '#191919',
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 8
  },
  description: {
    color: '#fff',
    marginRight: 24,
    textShadowColor: '#191919',
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 8
  },
  actions: {
    position: 'absolute',
    zIndex: 99,
    right: 10,
    bottom: 120,
    gap: 8
  },
  actionText: {
    textAlign: 'center',
    color: '#fff',
    textShadowColor: '#191919',
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 8
  }


})
