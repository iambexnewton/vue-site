import { ref } from "vue";

const getGroups = () => {
  const groups = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:9900/groups");
      if (!data.ok) {
        throw Error("no data availible");
      }
      userSets.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { groups, error, load };
};

export default getGroups;
