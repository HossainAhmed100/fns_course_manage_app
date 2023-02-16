import React from "react";

function UserRecordClassTable({ rclass, index }) {
  const { classdate, courseName, classsize, classlink, classduration } = rclass;
  // {data.classdate, courseName, cousreId data.classlink, data.classsize, data.classduration}
  return (
    <tr>
      <th>{index && index}</th>
      <td>{courseName && courseName}</td>
      <td>{classduration && classduration}</td>
      <td>{classsize && classsize}</td>
      <td>{classdate && classdate}</td>
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
    </tr>
  );
}

export default UserRecordClassTable;
