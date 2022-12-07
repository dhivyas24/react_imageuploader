import "./styles.css";
import React, { useState } from "react";
import Data from "./Data";
function App() {
  const [usersData, setUsersData] = useState([
    {
      img1: { value: "" },
      img2: { value: "" },
      img3: { value: "" }
    }
  ]);

  const [currentUser, setCurrentUser] = useState({
    img1: { error: false, value: "" },
    img2: { error: false, value: "" },
    img3: { error: false, value: "" }
  });

  function handleNew(e) {
    // add new user data
    e.preventDefault();
    const updateUsers = [...usersData, currentUser];
    // update the state to the updatedUsers

    setUsersData(updateUsers);
  }

  function handleimg1(e) {
    setCurrentUser({
      ...currentUser,
      img1: { ...currentUser.img1, value: e.target.value }
    });
  }

  function handleimg2(e) {
    setCurrentUser({
      ...currentUser,
      img2: { ...currentUser.img2, value: e.target.value }
    });
  }

  function handleimg3(e) {
    console.log(e.target.value);
    setCurrentUser({
      ...currentUser,
      img3: { ...currentUser.img3, value: e.target.value }
    });
  }
  return (
    <div>
      <div className="Heading">
        <h1>Image Loader</h1>
      </div>
      <div className="sub">
        <h4>Image 1</h4>
        <input onChange={handleimg1} placeholder="Enter the image URL 1" />
        <h4> Image 2 </h4>
        <input onChange={handleimg2} placeholder="Enter the image URL 2" />

        <h4>Image 3</h4>

        <input onChange={handleimg3} placeholder="Enter the image URL 3" />

        <button onClick={handleNew} backgroundcolor="green">
          create
        </button>
        <Data data={usersData} />
      </div>
    </div>
  );
}
export default App;
