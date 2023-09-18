import React, { useEffect, useState } from "react";
export default function ApiFetch() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {Data.map((item) => {
        return (
          <ol key={item.id}>
            User_Name: {item.username}, Full_Name: {item.name}, User_Email:{" "}
            {item.email}
          </ol>
        );
      })}
    </>
  );
}
