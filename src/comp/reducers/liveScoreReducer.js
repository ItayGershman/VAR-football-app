import { LIVE_GAMES } from '../actions/actionsType'

const initialState = {
    // matchLeague: [],
    // matchHome: [],
    // matchAway: [],
    // leagueFlag: [],
    // minute:[],
    // goalsAwayTeam:[],
    // goalsHomeTeam:[],
    matches:[{
        matchLeague :'',
        leagueFlag :'',
        matchHome : '',
        matchAway :'',
        minute : 0,
        goalsAwayTeam :0,
        goalsHomeTeam :0,
        gameTime:''
    }],//objects
    leagues:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LIVE_GAMES: {
            console.log('LIVE_GAMES')
            return {
                ...state,
                matches:action.matches
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