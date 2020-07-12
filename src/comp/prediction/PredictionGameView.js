import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Image from 'react-native-remote-svg';
import predictionStyle from './predictionStyle';
export default function PredictionGameView({
  predictedScore,
  winningPercent,
  h2hGames,
  advice,
  match
}) {
  return (
    <View>
      <View style={predictionStyle.homeAway}>
        <Text style={predictionStyle.homeTitle}>HOME</Text>
        <Text style={predictionStyle.homeTitle}>AWAY</Text>
      </View>
      <View style={predictionStyle.flatListMatch}>
        <View style={predictionStyle.matchRow}>
          <Image style={predictionStyle.homeLogo} source={{ uri: match.homeLogo }} />
          <Text style={predictionStyle.teamName}>{match.home}</Text>
          <Text style={predictionStyle.score}>{match.goalsHomeTeam}VS</Text>
          <Text style={predictionStyle.teamName}>{match.away}</Text>
          <Image style={predictionStyle.awayLogo} source={{ uri: match.awayLogo }} />
        </View>
      </View>
      <View style={predictionStyle.lastH2H}>
        <Text style={predictionStyle.h2hTitle}>Last H2H</Text>
        {h2hGames.games.map((game, key) => {
          return (
            <View key={key} style={predictionStyle.matchRow}>
              <Text style={predictionStyle.teamName}>{game.home.replace(/"/g, '')}</Text>
              <Text style={predictionStyle.score}>{game.score.replace(/"/g, '')}</Text>
              <Text style={predictionStyle.teamName}>{game.away.replace(/"/g, '')}</Text>
            </View>
          );
        })}
      </View>
      <View>
        <Text style={predictionStyle.winningPercent}>Winning Percent %</Text>
        <View style={predictionStyle.homeDrawAway}>
          <Text style={predictionStyle.percentTitle}>HOME</Text>
          <Text style={predictionStyle.percentTitle}>DRAW</Text>
          <Text style={predictionStyle.percentTitle}>AWAY</Text>
        </View>
        <View style={predictionStyle.percent}>
          <Text style={predictionStyle.percentNumber}>{winningPercent.home}</Text>
          <Text style={predictionStyle.percentNumber}>{winningPercent.draw}</Text>
          <Text style={predictionStyle.percentNumber}>{winningPercent.away}</Text>
        </View>
      </View>
      <View>
        <Text style={predictionStyle.ourAdvice}>Our Advice</Text>
        <View style={predictionStyle.advice}>
          <Text style={predictionStyle.adviceText}>{advice}</Text>
        </View>
      </View>
      <View>
        <Text style={predictionStyle.ourAdvice}>We Predict</Text>
        <View style={predictionStyle.predictedScore}>
          <Text style={predictionStyle.teamName}>{match.home}</Text>
          <Text style={predictionStyle.score}>
            {predictedScore.home}-{predictedScore.away}
          </Text>
          <Text style={predictionStyle.teamName}>{match.away}</Text>
        </View>
      </View>
    </View>
  );
}

PredictionGameView.propTypes = {
  match: PropTypes.object,
  winningPercent: PropTypes.object,
  h2hGames: PropTypes.object,
  advice: PropTypes.string,
  predictedScore: PropTypes.object
};
