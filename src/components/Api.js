import axios from "axios";

export async function getProjects() {
  const { data } = await axios.get(
    `https://94p50dfz.api.sanity.io/v2021-10-21/data/query/production?query=*[_type == "projects"] | order(_createdAt desc)`
  );

  return data.result;
}
