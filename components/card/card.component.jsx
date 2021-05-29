import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Paragraph, Button, ProgressBar } from 'react-native-paper';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 20,
        flex: 1,
        width: '50vh',
        overflow: 'hidden',
    },
    content: {
        backgroundColor: colors.originalTheme.corFundoCard,
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
                            color={colors.originalTheme.corBotao}
                            labelStyle={{ fontSize: 80}}
                            onPress={handlePlay}
                    />
                </Card.Actions>
                <Paragraph style={styles.title}>{task}</Paragraph>
            </Card.Content>
            <View style={{ height: 15, backgroundColor: colors.originalTheme.corFundoCard}}>
                <ProgressBar
                    progress={progress}
                    color={colors.originalTheme.corBarra}
                    style={{ height: 5}}>
                </ProgressBar>
            </View>
        </Card>
    )
}

export default CardQuote;