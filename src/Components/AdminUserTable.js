import React from "react";
import { VscCopy } from "react-icons/vsc";
import profileimg from "../Utility/img/profile.png";

function AdminUserTable({ user, index, handleUserRole }) {
  const { name, role, accountstatus } = user;
  return (
    <tr>
      <th>{index}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={profileimg} alt="Avatar" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name && name}</div>
            <div className="text-sm flex items-center opacity-50">
              ID :
              <button
                className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                data-tip="Click to Copy"
              >
                B4S6F5B
                <VscCopy />
              </button>
            </div>
          </div>
        </div>
      </td>
      <td>
        <button className="btn btn-ghost btn-sm">{role && role}</button>
      </td>
      <td>
        Web Development Course
        <br />
        <span className="badge badge-ghost badge-sm">and 1more</span>
      </td>
      <td>
        {accountstatus ? (
          <button className="btn btn-success btn-xs">Active</button>
        ) : (
          <button className="btn btn-error btn-xs">Suspend</button>
        )}
      </td>
      <td>18 Class</td>
      <td>60 %</td>
      <td>Tk 5,000</td>
      <td>
        <div className="flex items-center gap-2">
          <button className="btn btn-warning btn-xs">Warning</button>
          {user.accountstatus ? (
            <button
              onClick={() => handleUserRole(user)}
              className="btn btn-error btn-xs"
            >
              Suspend
            </button>
          ) : (
            <button
              onClick={() => handleUserRole(user)}
              className="btn btn-success btn-xs"
            >
              Active
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}

export default AdminUserTable;
