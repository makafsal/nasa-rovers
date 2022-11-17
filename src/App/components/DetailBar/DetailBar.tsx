import React from "react";

const DetailBar = (props: IDetailBarProps) => {
  const manifest = props.manifest;

  return (
    <>
      <h5 className="px-4 mt-4 py-2 text-white">{manifest?.name}</h5>
      <table className="table table-striped text-white table-borderless">
        <tbody>
          <tr>
            <td className="text-white px-4 py-1">Status</td>
            <td className="text-white text-capitalize">{manifest?.status === 'active'? '🟢' : '✅'} {manifest?.status}</td>
          </tr>
          <tr>
            <td className="text-white px-4 py-1">Landing Date</td>
            <td className="text-white">{manifest?.landing_date}</td>
          </tr>
          <tr>
            <td className="text-white px-4 py-1">Launch Date</td>
            <td className="text-white">{manifest?.launch_date}</td>
          </tr>
          <tr>
            <td className="text-white px-4 py-1">Total Solar Days</td>
            <td className="text-white">{manifest?.max_sol}</td>
          </tr>
          <tr>
            <td className="text-white px-4 py-1">Last Update</td>
            <td className="text-white">{manifest?.max_date}</td>
          </tr>
          <tr>
            <td className="text-white px-4 py-1">Total Photos</td>
            <td className="text-white">{manifest?.total_photos}</td>
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
