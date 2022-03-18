import React from "react";
import styles from "../styles/Nba.module.css";
import axios from "axios";
//
export default function Nba({ res }) {
  console.log(process.env.NBA_KEY, res);
  return (
    <>
      <div className={styles.container}>Nba</div>
    </>
  );
}

export async function getStaticProps(context) {
  const options = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/seasons",
    headers: {
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key": process.env.NBA_KEY,
    },
  };
  console.log(process.env.NBA_KEY);
  //
  let res = await axios
    .request(options)
    .then(function (response) {
      console.log("Hereeee ", response.data);
      return response.data.json();
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
  //
  return {
    props: { res }, // will be passed to the page component as props
  };
}
