const searchCollection = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/postss");

    console.log("res", res.ok);

    throw new Error("test");

    const data = await res.json();

    console.log("data", res);
  } catch (error) {
    console.log(error);
  }
};

searchCollection();
