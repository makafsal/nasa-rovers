import React from "react";
import "./DetailBar.css";

const DetailBar = (props: IDetailBarProps) => {
  const manifest = props.manifest;

  return (
    <>
      <h5 className="px-4 py-2">{manifest?.name}</h5>
      <table className="table table-striped table-borderless">
        <tbody>
          <tr>
            <td className="px-4">Status</td>
            <td className="text-capitalize">{manifest?.status}</td>
          </tr>
          <tr>
            <td className="px-4">Landing Data</td>
            <td>{manifest?.landing_date}</td>
          </tr>
          <tr>
            <td className="px-4">Launch Date</td>
            <td>{manifest?.launch_date}</td>
          </tr>
          <tr>
            <td className="px-4">Total Solar Days</td>
            <td>{manifest?.max_sol}</td>
          </tr>
          <tr>
            <td className="px-4">Last Update</td>
            <td>{manifest?.max_date}</td>
          </tr>
          <tr>
            <td className="px-4">Total Photos</td>
            <td>{manifest?.total_photos}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DetailBar;

export interface IDetailBarProps {
  manifest: any;
}
