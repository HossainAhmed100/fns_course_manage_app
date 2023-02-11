import React from "react";
import { VscCopy } from "react-icons/vsc";
import profileimg from "../../Utility/img/profile.png";

function APayment() {
  return (
    <div className="p-10">
      <div>
        <div className="bg-white rounded-3xl p-8 custom-border custom-shadow">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>User</th>
                  <th>Course</th>
                  <th>TRNX ID</th>
                  <th>Paid Amount</th>
                  <th>UnPaid Amount</th>
                  <th>Payment Method</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={profileimg} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hossain Ahmed</div>
                        <div className="text-sm opacity-50">
                          <button className="btn btn-ghost flex gap-2 items-center btn-sm">
                            125646
                            <VscCopy />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Web Development Course
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      and 1more
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-ghost flex gap-2 items-center btn-sm">
                      B4S6F5B1231DFB65RE44
                      <VscCopy />
                    </button>
                  </td>
                  <th>Tk 1,000</th>
                  <th>Tk 5,000</th>
                  <th>Bikash</th>
                  <th>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-success btn-xs">
                        Approve
                      </button>
                      <button className="btn btn-error btn-xs">
                        Wrong info
                      </button>
                    </div>
                  </th>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>User</th>
                  <th>Course</th>
                  <th>TRNX ID</th>
                  <th>Paid Amount</th>
                  <th>UnPaid Amount</th>
                  <th>Payment Method</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default APayment;
