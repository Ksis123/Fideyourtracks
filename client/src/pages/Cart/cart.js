import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css"
import Player from "../../components/Player";

function Cart() {
  const { allSongs, user } = useSelector((state) => state.user);
  const navigate = useNavigate();



  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl text-gray-700">Product:Tracks Cart</h1>
        <button
          className="summit-button"
          onClick={() => {
          }}
        >
          Payment <i className="fa-solid fa-credit-card" />
        </button>
      </div>
      <table className="w-full mt-5">
        <thead className="w-full">
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allSongs.map((song) => (

            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.genre}</td>
              <td>THB {song.price}</td>
              <td>{song.duration}</td>
              <td>
                <button className="editback-button">
                  <i
                    className="fa-solid fa-pen"
                    onClick={() => {
                      navigate("/manage/add-edit-song/?id=" + song._id);
                    }}
                  ></i>
                </button>
                <button className="delete-button">
                  <i className="fa-solid fa-trash"
                  ></i>
                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
      <Player />
    </div>
  );
}

export default Cart;
