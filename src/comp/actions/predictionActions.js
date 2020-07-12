import { ODDS, PREDICTION_LIVE_GAMES, PREDICTION_LEAGUES, LOADING_PREDICTION } from './actionsType';
import { API_KEY, API_HOST } from 'react-native-dotenv';
import getCurrentDate from '../../constants';

const getFixtureID = (match, gamesData) => {
  for (let i = 0; i < gamesData.length; ++i) {
    if (~match.indexOf(gamesData[i].home.toString())) {
      //Search for home team
      if (~match.indexOf(gamesData[i].away.toString())) {
        //Search for away tem
        return gamesData[i].fixtureID;
      }
    }
  }
  return;
};

export const getOdds = (match, gamesData) => async (dispatch) => {
  //find from match the fixture_id
  dispatch({ type: LOADING_PREDICTION });
  const fixture_id = getFixtureID(match, gamesData);
  const logos = await getTeamsLogo(fixture_id);
  fetch(`https://api-football-v1.p.rapidapi.com/v2/predictions/${fixture_id}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': API_HOST,
      'x-rapidapi-key': API_KEY
    }
  })
    .then((response) => response.json())
    .then((data) => {
      const prediction = organizeData(data, logos);
      dispatch({
        type: ODDS,
        match: prediction.matchTeams,
        advice: prediction.advice,
        predictedScore: prediction.score,
        winningPercent: prediction.winningPercent,
        h2hGames: prediction.h2hGames
      });
    })
    .catch((error) => {
      console.error(`error:${error}`);
    });
};

const organizeData = (data, logos) => {
  const API_DATA = data.api.predictions[0];
  const matchTeams = {
    home: API_DATA.teams.home.team_name,
    homeLogo: logos.homeLogo,
    away: API_DATA.teams.away.team_name,
    awayLogo: logos.awayLogo
  };
  const predictedScore = {
    home: Math.round(API_DATA.goals_home * -1),
    away: Math.round(API_DATA.goals_away * -1)
  };
  const winPercent = {
    home: API_DATA.winning_percent.home,
    draw: API_DATA.winning_percent.draws,
    away: API_DATA.winning_percent.away
  };
  const advice = API_DATA.advice;
  const h2h = {
    games: []
  };
  const lastGames = API_DATA.h2h.length;
  if (lastGames > 5) {
    for (let i = lastGames - 5; i < lastGames; ++i) {
      const matchDetails = {
        home: API_DATA.h2h[i].homeTeam.team_name,
        away: API_DATA.h2h[i].awayTeam.team_name,
        score: API_DATA.h2h[i].score.fulltime
      };
      h2h.games.push(matchDetails);
    }
    h2h.games.reverse();
  } else {
    for (let i = 0; i < lastGames; ++i) {
      const matchDetails = {
        home: API_DATA.h2h[i].homeTeam.team_name,
        away: API_DATA.h2h[i].awayTeam.team_name,
        score: API_DATA.h2h[i].score.fulltime
      };
      h2h.games.push(matchDetails);
    }
    h2h.games.reverse();
  }
  const prediction = {
    matchTeams,
    advice,
    score: predictedScore,
    winningPercent: winPercent,
    h2hGames: h2h
  };
  return prediction;
};

export const getTeamsLogo = (fixture_id) => {
  const teamsLogo = {};
  fetch(
    `https://api-football-v1.p.rapidapi.com/v2/fixtures/id/${fixture_id}?timezone=Asia/Jerusalem`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY
      }
    }
  )
    .then((response) => response.json())
    .then((data) => {
      teamsLogo.homeLogo = data.api.fixtures[0].homeTeam.logo;
      teamsLogo.awayLogo = data.api.fixtures[0].awayTeam.logo;
    })
    .catch((error) => {
      console.error(`error:${error}`);
      return 'No logos for this teams';
    });
    alert(`logos:${JSON.stringify(teamsLogo)}`)
  return teamsLogo;
};

export const getLiveGames = (league) => async (dispatch) => {
  let leagueId = '';
  switch (league) {
    case 'Spain':
      leagueId = 775;
      break;
    case 'England':
      leagueId = 524;
      break;
    case 'Italy':
      leagueId = 891;
      break;
    case 'Israel':
      leagueId = 637;
      break;
    case 'French':
      leagueId = 525;
      break;
    case 'Germen':
      leagueId = 754;
      break;
    default:
      break;
  }
  dispatch({
    type: PREDICTION_LIVE_GAMES,
    league: leagueId
  });
};

export const getLeagues = () => async (dispatch) => {
  const date = getCurrentDate();
  fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${date}?timezone=Asia/Jerusalem`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': API_HOST,
      'x-rapidapi-key': API_KEY
    }
  })
    .then((response) => response.json())
    .then((data) => {
      const leaguesId = [775, 524, 891, 637, 525, 754];
      const leagues = [];
      const gamesData = [];
      for (let i = 0; i < data.api.fixtures.length; ++i) {
        if (leaguesId.includes(data.api.fixtures[i].league_id)) {
          let leagueName = '';
          switch (JSON.stringify(data.api.fixtures[i].league_id)) {
            case '775':
              leagueName = 'Spain';
              break;
            case '524':
              leagueName = 'England';
              break;
            case '891':
              leagueName = 'Italy';
              break;
            case '637':
              leagueName = 'Israel';
              break;
            case '525':
              leagueName = 'French';
              break;
            case '754':
              leagueName = 'Germen';
              break;
            default:
              break;
          }
          leagues.push(leagueName);
          const API_DATA = data.api.fixtures[i];
          const match = {
            home: API_DATA.awayTeam.team_name,
            away: API_DATA.homeTeam.team_name,
            leagueID: API_DATA.league_id,
            minute: API_DATA.elapsed,
            date: API_DATA.event_date.substring(11, 16),
            goalsAway: API_DATA.goalsAwayTeam,
            goalsHome: API_DATA.goalsHomeTeam,
            fulltime: API_DATA.score.fulltime,
            fixtureID: API_DATA.fixture_id
          };
          gamesData.push(match);
        }
      }

      const uniqueLeagues = [...new Set(leagues)];
      for (let i = 0; i < uniqueLeagues.length; ++i) {
        const leagueObj = {
          value: uniqueLeagues[i]
        };
        uniqueLeagues[i] = leagueObj;
      }
      dispatch({
        type: PREDICTION_LEAGUES,
        leagues: uniqueLeagues,
        gamesData
      });
    });
};
