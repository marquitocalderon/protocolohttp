
import axios from 'axios';
import React from 'react'

async function axiosDatetime() {
  try {
    const respuesta = await axios.get(`http://worldtimeapi.org/api/timezone/America/Lima`);
    const datosServidor = respuesta.data;
    return datosServidor;
  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
    throw error;
  }
}

export default async function page() {

  const data = await axiosDatetime();

  return (
    <div>ESTO ES EN EL SERVIDOR {data.utc_datetime}</div>
  )
}
