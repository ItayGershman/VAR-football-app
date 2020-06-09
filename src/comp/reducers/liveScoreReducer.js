import { LIVE_GAMES } from '../actions/actionsType'

const initialState = {
    matchData: [],
    matchHome: [],
    matchAway: [],
    leagueFlag: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LIVE_GAMES: {
            console.log('LIVE_GAMES')
            const newMatchData = ['first item']
            return {
                ...state,
                matchData:newMatchData
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