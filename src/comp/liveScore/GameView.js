import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Image from 'react-native-remote-svg'
import { liveStyles } from './liveStyles'

export default function GameView({ game }) {
    console.log(`inside comp${JSON.stringify(game)}`)
    return (
        <View style={liveStyles.flatListMatch}>
            <View style={styles.minuteContainer}>
                {game.minute == 90 ? <Text style={styles.minute}>Ended</Text> :
                    game.minute == 0 ? <Text style={styles.minute}>{game.gameTime}</Text> :
                        <Text style={styles.minute}>{game.minute}</Text>}
            </View>
            <View style={liveStyles.matchRow}>

                <Image
                    style={liveStyles.homeLogo}
                    source={{ uri: game.matchHome.logo }}
                />
                <Text style={liveStyles.teamName}>{game.matchHome.team_name}</Text>
                <Text style={liveStyles.score}>{game.goalsHomeTeam}-{game.goalsAwayTeam}</Text>
                <Text style={liveStyles.teamName}>{game.matchAway.team_name}</Text>
                <Image
                    style={liveStyles.awayLogo}
                    source={{ uri: game.matchAway.logo }}
                />
            </View>
        </View>
    );
}

GameView.propTypes = {
    game: PropTypes.object
};