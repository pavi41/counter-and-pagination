import React, { useEffect, useState } from "react";
import "./App.css";

const Pagination = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({ list: [], total: 0 });

  useEffect(() => {
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=5`)
      .then((res) => res.json())
      .then((data) => {
        setData({ list: data.data, total: data.totalPassengers });
      })
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <div className='wrapper'>
      <h2>Number of trips done by Employees</h2>
      <table cellPadding="20">
        <thead>
          <tr>
            <th>Name</th>
            <th>Trips Done</th>
          </tr>
        </thead>
        <tbody>
          {data.list.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.trips}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <di className="buttons">
        {page > 0 && <button onClick={() => setPage(page - 1)}>Prev</button>}
        {page * 5 < data.total && (
          <button onClick={() => setPage(page + 1)}>Next</button>
        )}
      </di>
    </div>
  );
};

export default Pagination;
