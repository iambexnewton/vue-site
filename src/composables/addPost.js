import { ref } from "vue";

const addPost = (id) => {
  const userSet = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:9900/userSets/" + id);
      if (!data.ok) {
        throw Error("oops this post does not exist");
      }
      userSet.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(userSet.id);
    }
  };
  return { userSet, error, load };
};

export default getPost;
