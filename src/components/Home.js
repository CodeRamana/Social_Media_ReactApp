import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "../context/DataContext";

const Home = () => {
  const { searchResult, isLoading, fetchError } = useContext(DataContext);
  return (
    <div className="Feed">
      {isLoading && <p style={{ color: "white" }}>Loading...</p>}
      {!isLoading && fetchError && (
        <p style={{ color: "yellow" }}>{`Error:${fetchError}`}</p>
      )}
      {!isLoading && !fetchError && (
        <>
          {" "}
          {searchResult.length ? (
            <Feed posts={searchResult} />
          ) : (
            <p style={{ color: "white" }}>No Posts Available...</p>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
