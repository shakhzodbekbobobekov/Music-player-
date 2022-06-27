import { v4 as uuidv4 } from "uuid";
function util() {
  return [
    {
      name: "mendirman ",
      cover: "https://i.ytimg.com/vi/3o8IUkjcFlo/maxresdefault.jpg",
      artist: "ozodbek",
      color: ["#ccc444", "#754551"],
      audio: "https://mp3party.net/music/9838731",
      id: uuidv4(),
      active: false,
    },
  ];
}

export default util;
