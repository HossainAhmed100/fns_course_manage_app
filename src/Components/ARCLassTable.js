import React from "react";

function ARCLassTable({ rclass, index, rcdelete }) {
  const { classdate, courseName, classsize, classlink, classduration } = rclass;
  // {data.classdate, courseName, cousreId data.classlink, data.classsize, data.classduration}
  return (
    <tr>
      <th>{index && index}</th>
      <td>{courseName && courseName}</td>
      <td>
        <a
          target={"_blank"}
          rel="noreferrer"
          className="bg-primary btn rounded-md btn-sm"
          href={classlink && classlink}
        >
          Download
        </a>
      </td>
      <td>{classduration && classduration}</td>
      <td>{classsize && classsize}</td>
      <td>{classdate && classdate}</td>
      <td>
        <button
          onClick={() => rcdelete(rclass)}
          className="btn btn-error btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ARCLassTable;
