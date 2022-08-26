import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Tabel() {
  const [state, setState] = useState([]);

  let no=1;
  let keterangan="not found data";

   // get
   function fetchData() {
    axios
      .get(
        'https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getVessel?keyword=S&port=IDJKT-T009D'
      )
      .then((res) => {
        setState(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <table  hover className='table table-bordered border'>
          <thead>
            <tr className='bg-table'>
              <th>No.</th>
              <th>ID</th>
              <th>Name</th>
              <th>Call Sign</th>
              <th>Voyage in</th>
              <th>Opname</th>
              <th>Clossing</th>
            </tr>
          </thead>
          <tbody> 
            {state.map((item)=>(
            <tr>
              <td>{no++}</td>
              <td>{item.id_vsb_voyage}</td>
              <td>{item.vessel_name}</td>
              <td>{item.call_sign}</td>
              <td>{item.voyage_in}</td>
              <td>{item.opname?item.opname:keterangan}</td>
              <td>{item.closing}</td>
            </tr>
            ))}        
          </tbody>
        </table>
    </div>
  )
}
