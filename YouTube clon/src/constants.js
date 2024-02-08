export const sidebarItems = [
    { iconClass: "fa-house", text: "Home" },
    { iconClass: "fa-video", text: "Shorts" },
    { iconClass: "fa-box", text: "Subscriber" },
    { iconClass: "fa-user", text: "Your Channel" },
    { iconClass: "fa-clock", text: "History" },
    { iconClass: "fa-camera", text: "Videos" },
    { iconClass: "fa-clock", text: "Watch Later" },
    { iconClass: "fa-thumbs-up", text: "Liked Videos" },
    { iconClass: "fa-stairs", text: "Trending" },
    { iconClass: "fa-cart-shopping", text: "Shopping" },
    { iconClass: "fa-music", text: "Music" },
    { iconClass: "fa-film", text: "Film" },
    { iconClass: "fa-star-of-life", text: "Live" },
    { iconClass: "fa-headset", text: "Gaming" },
];


export const navItemLinks = [
    {
        name: "All",
    },
    {
        name: "Mixes",
    },
    {
        name: "Music",
    },
    {
        name: "Songs",
    },
    {
        name: "Arijit",
    },
    {
        name: "Live",
    },
    {
        name: "Coding",
    },
    {
        name: "Java",
    },
    {
        name: "Python",
    },
    {
        name: "HTML",
    },
    {
        name: "CSS",
    },
    {
        name: "Trending",
    },
    {
        name: "TailwindCSS",
    },
    {
        name: "PHP",
    },
    {
        name: "Ruby",
    },
    {
        name: "C++",
    },
    {
        name: "JavaScript",
    },
    {
        name: "C#",
    },
    {
        name: "Editor",
    },
];

const YOUTUBE_API_KEY = "AIzaSyAchkxS61EhuWM3ftW_614cDic0SZi6FjQ";

export const YOUTUBE_POPULAR_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" + YOUTUBE_API_KEY;

export const YOUTUBE_SUGGESTED_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=" + YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_INFO = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" + YOUTUBE_API_KEY 