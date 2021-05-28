import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#EBF5F7',
        margin: 10,
        borderRadius: 20,
        flex: 1,
        width: '50vh',
        overflow: 'hidden',
    },
    content: {
        backgroundColor: '#FAE8E0',
    },
    cover: {
        height: 220,
    },
    buttons: {
        flex: 1
    }
});

const CardQuote = ({ task, background }) => {

    const [playButton, setPlaybutton] = useState("play");

    const handlePlay = () => {
        if(playButton === "play"){
            setPlaybutton("pause")
        }else{
            setPlaybutton("play")
        }
    }

    return (
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={{ uri: background }} />
            <Card.Content style={styles.content}>
                <Card.Actions>
                    <Button style={styles.buttons}
                            icon={playButton}
                            color="#541616"
                            labelStyle={{ fontSize: 80}}
                            onPress={handlePlay}
                    />
                </Card.Actions>
                <Paragraph>{task}</Paragraph>
            </Card.Content>
        </Card>
    )
}

export default CardQuote;