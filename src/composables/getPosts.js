import { ref } from "vue";

const getPosts = () => {
  const userSets = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:9900/userSets");
      if (!data.ok) {
        throw Error("no data availible");
      }
      userSets.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { userSets, error, load };
};

export default getPosts;
