export default function Context() {
  const availableReactions = [
    { emoji: "👍", name: "thumbs_up" },
    { emoji: "🎉", name: "party" },
    { emoji: "🔥", name: "fire" },
    { emoji: "👏", name: "clap" },
    { emoji: "❤️", name: "heart" },
    { emoji: "👌", name: "ok_hand" },
  ];

  const usersAuth = [
    {
      uuid: 100,
      password: "min: 6 max: 32",
      email: "09123456789@phone.local",
    },
    {
      uuid: 101,
      password: "min: 6 max: 32",
      email: "09123458789@phone.local",
    },
    {
      uuid: 102,
      password: "min: 6 max: 32",
      email: "09183456789@phone.local",
    },
  ];

  const usersProfile = {
    100: {
      profile: "",
      birthDay: "DD-MM-YY",
      bio: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ipsam praesentium culpa corporis dolorum non dignissimos quibusdam ex, modi voluptates laborum placeat, eius deserunt fugit hic aspernatur consequatur totam quas?",
    },
    101: {
      profile: "",
      birthDay: "DD-MM-YY",
      bio: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ipsam praesentium culpa corporis dolorum non dignissimos quibusdam ex, modi voluptates laborum placeat, eius deserunt fugit hic aspernatur consequatur totam quas?",
    },
    102: {
      profile: "",
      birthDay: "DD-MM-YY",
      bio: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ipsam praesentium culpa corporis dolorum non dignissimos quibusdam ex, modi voluptates laborum placeat, eius deserunt fugit hic aspernatur consequatur totam quas?",
    },
  };

  //   const users = [
  //     { name: "Ali Rezaei", initial: "A", color: "#FF5733" },
  //     { name: "You", initial: "Y", color: "#A259FF" },
  //     { name: "Mina Jafari", initial: "M", color: "#33A1FF" },
  //     { name: "Sina Bahrami", initial: "S", color: "#33FF57" },
  //     { name: "Omid", initial: "O", color: "#8B008B" },
  //     { name: "Afshin", initial: "F", color: "#00CED1" },
  //     { name: "Reza", initial: "R", color: "#FFD700" },
  //     { name: "Zahra", initial: "Z", color: "#FF69B4" },
  //   ];

  const initialGroupMessages = [
    {
      id: "00225577",
      members: [],
      massages: [
        {
          id: 1,
          senderID: "ali",
          time: "8:15 AM",
          date: "2023-06-15",
          activities: ["Finished biology notes", "coding practice"],
          score: 910,
          reactions: [],
        },
        {
          id: 2,
          senderID: "you",
          time: "8:16 AM",
          date: "2023-06-15",
          activities: ["Guitar practice", "Science worksheet"],
          score: 890,
          reactions: [],
        },
        {
          id: 3,
          senderID: "mina",
          time: "8:17 AM",
          date: "2023-06-16",
          activities: ["Organized desktop", "English podcast"],
          score: 865,
          reactions: [],
        },
        {
          id: 4,
          senderID: "sina",
          time: "8:18 AM",
          date: "2023-06-16",
          activities: ["Midterm essay done", "Helped friend project"],
          score: 880,
          reactions: [{ user: "sina", reaction: "heart" }],
        },
        {
          id: 5,
          senderID: "you",
          time: "8:19 AM",
          date: "2023-06-17",
          activities: ["Drawing practice", "design tutorial"],
          score: 840,
          reactions: [],
        },
        {
          id: 6,
          senderID: "omid",
          time: "10:30 AM",
          date: "2023-06-17",
          activities: ["study", "code"],
          score: 880,
          reactions: [
            { user: "afshin", reaction: "thumbs_up" },
            { user: "reza", reaction: "thumbs_up" },
            { user: "zahra", reaction: "heart" },
          ],
        },
      ],
    },
    {
      id: "25846321",
      members: [],
      massages: [
        {
          id: 1,
          senderID: "you",
          time: "11:00 AM",
          date: "2024-01-01",
          activities: ["Planning session", "Research for project"],
          score: 750,
          reactions: [],
        },
        {
          id: 1,
          senderID: "you",
          time: "11:00 AM",
          date: "2024-01-01",
          activities: ["Planning session", "Research for project"],
          score: 750,
          reactions: [],
        },
        {
          id: 1,
          senderID: "you",
          time: "11:00 AM",
          date: "2024-01-01",
          activities: ["Planning session", "Research for project"],
          score: 750,
          reactions: [],
        },
      ],
    },
  ];

  // همهموارد بالا تازی یکی از گروه ها هست و باید همه گروه ها اینگونه باشد:

  // const Groups = {

  // 00225577:{

  // ...

  // },

  // 22558744:{

  // ...

  // }

  // .

  // .

  // .

  // CodeOfGroup:{

  // ...

  // }

  // }

  console.log(
    usersAuth,
    usersProfile,
    initialGroupMessages,
    availableReactions
  );
  return <div>Context</div>;
}
