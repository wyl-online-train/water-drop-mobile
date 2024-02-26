import { useQuery } from "@apollo/client";
import { FIND, GET_LOCATIONS } from "./graphql/demo";

function App() {
  const { data, loading } = useQuery(FIND, {
    variables: { id: "4e4b9999-35bb-4452-8d87-e2b4679a1ab8" }
  });

  return (
    <>
      {/* <p>{loading}</p>
      <p>{JSON.stringify(data)}</p> */}
    </>
  );
}

export default App;
