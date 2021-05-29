import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Paragraph, Button, ProgressBar } from 'react-native-paper';


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
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        height: 24
    }
});

const CardQuote = ({ task, background }) => {

    const [playButton, setPlaybutton] = useState("play");

    const handlePlay = () => {
        if(playButton === "play"){
            setPlaybutton("pause")
            setProgress(1)
        }else{
            setPlaybutton("play")
            setProgress(0)
        }
    }

    const [progress, setProgress] = useState(null);

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
                <Paragraph style={styles.title}>{task}</Paragraph>
            </Card.Content>
            <View style={{ height: 15, backgroundColor: '#FAE8E0'}}>
                <ProgressBar
                    progress={progress}
                    color='#541616'
                    style={{ height: 5}}>
                </ProgressBar>
            </View>
        </Card>
    )
}

export default CardQuote;