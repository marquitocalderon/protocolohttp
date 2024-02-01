"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ClientePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://worldtimeapi.org/api/timezone/America/Lima');
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error loading data: {error.message}</div>
      ) : (
        data && (
          <div>
            ESTO ESTA EN CLIENTE PARTE DEL FRONTED: {data.utc_datetime}
          </div>
        )
      )}
    </div>
  );
}
