import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Text, Avatar } from 'react-native-paper';

export default function UsandoPaper() {
    return (

        <Card style={styles.card}>
            <Card.Title title="Flamengo"/>
            <Card.Content>
                <Text variant="titleLarge">Clube de Regatas do Flamengo</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <Button onPress={() => console.log('Cancel')}>Cancel</Button>
                <Button onPress={() => console.log('Ok')}>Ok</Button>
            </Card.Actions>
        </Card>

    )
}

const styles = StyleSheet.create({
    card: {
        width: '90%'
    }
})