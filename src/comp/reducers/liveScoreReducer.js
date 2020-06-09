import { LIVE_GAMES } from '../actions/actionsType'

const initialState = {
    matchLeague: [],
    matchHome: [],
    matchAway: [],
    leagueFlag: [],
    minute:[],
    goalsAwayTeam:[],
    goalsHomeTeam:[],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LIVE_GAMES: {
            console.log('LIVE_GAMES')
            const newMatchLeague = [action.matchLeague]
            const newMatchHome = action.matchHome
            const newMatchAway = action.matchAway
            const newLeagueFlag = [action.leagueFlag]
            const newMinute = action.minute
            const newGoalsHomeTeam = action.goalsHomeTeam
            const newGoalsAwayTeam = action.goalsAwayTeam
            return {
                ...state,
                matchLeague:newMatchLeague,
                matchHome:newMatchHome,
                matchAway:newMatchAway,
                leagueFlag:newLeagueFlag,
                minute:newMinute,
                goalsAwayTeam:newGoalsAwayTeam,
                goalsHomeTeam:newGoalsHomeTeam
            }
            //filter tracks without image to display
            //   const newTracks = action.tracks.filter((track) => track.artwork_url !== null);
            //   return {
            //     ...state,
            //     tracks: newTracks,
            //     lastTracks: state.lastTracks.concat(action.query),
            //     isLoading: false
            //   };
        }
        default:
            return state;
    }
};