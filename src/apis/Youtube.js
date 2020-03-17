import axios from 'axios';

const KEY ='AIzaSyBHLs09F9juSu3vUh6bmbsi4kZ5AfPLbeg';


export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
}
});
