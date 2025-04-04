import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils.js";

const UserList = () => {
    const[users, setUser]= useState([]);

useEffect(() => {
    getUser();
  }, []);

     const getUser = async () =>{
        const response = await axios.get(`${BASE_URL}/users`);
        setUser(response.data);
    }

    const deleteUser = async (id) => {
        try {
          await axios.delete(`${BASE_URL}/users/${id}`);
          getUser();
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>no</th>
                        <th>name</th>
                        <th>judul</th>
                        <th>catatan</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.judul}</td>
                        <td>{user.catatan}</td>
                        <td>
                        <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}


export default UserList
