import { v4 as uuidv4 } from "uuid";
function util() {
  return [
    {
      name: "Mendirman o'sha ",
      cover: "https://i.ytimg.com/vi/3o8IUkjcFlo/maxresdefault.jpg",
      artist: "Ozodbek Nazarbekov",
      color: ["#ccc444", "#754551"],
      audio: "https://dl2.mp3party.net/online/9838731.mp3",
      id: uuidv4(),
      active: false,
    },
  ];
}

export default util;
