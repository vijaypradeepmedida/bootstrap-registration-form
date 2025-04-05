import React from "react";
import axios from "axios";

export default function Card(props) {
  const { apiData, setApiData } = props;
  const handleDelete = async (gamename) => {
    // setApiData(apiData.filter((card) => card.email !== email));

    try {
      await axios.delete(`http://localhost:2000/api/games/${gamename}`); // Replace with your API endpoint
      // Update the cardData state to remove the deleted card
      setApiData(apiData.filter((card) => card.gamename !== gamename));
    } catch (err) {
      console.error("Error deleting card:", err);
      // Handle the error (e.g., show an error message)
    }
  };
  return (
    <>
      {apiData.length ? (
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2 className="mb-3">Registred Games</h2>
            <p className="fs-3">
              Number of items - <b>{apiData.length}</b>
            </p>
          </div>
          <div className="row">
            {apiData.map((card, key) => (
              <div key={key} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card shadow-sm position-relative">
                  <button
                    className="btn btn-danger position-absolute top-0 end-0 m-2"
                    onClick={() => handleDelete(card.gamename)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </button>
                  <div className="card-body pe-5">
                    <h5 className="card-title">{card.gamename}</h5>
                    <p className="card-text">{card.status}</p>
                    <p className="card-text">{card.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container text-center">
          <h1>No games were registerd yet!</h1>
        </div>
      )}
    </>
  );
}
