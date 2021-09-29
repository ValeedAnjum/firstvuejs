const app = Vue.createApp({
  data() {
    return {
      fname: "Valeed",
      lname: "Anjum Siddiqui",
      email: "allinone644@gmail.com",
      gender: "male",
      picture:
        "https://avatars.githubusercontent.com/u/32477374?s=400&u=0a2887153a08991ce9a9ca43ffece1a744b2ca1e&v=4",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      (this.fname = results[0].name.first),
        (this.lname = results[0].name.last),
        (this.email = results[0].email),
        (this.gender = results[0].gender),
        (this.picture = results[0].picture.large);
    },
  },
});

app.mount("#app");
