import React from "react";
import { VscCopy } from "react-icons/vsc";
import hossainahmed from "../../Utility/img/hossainahmed.jpg";
import MdShahnewasRony from "../../Utility/img/MdShahnewasRony.jpg";
import alaminalhasan from "../../Utility/img/alaminalhasan.jpg";
import MohammadIbrahim from "../../Utility/img/MohammadIbrahim.jpg";
import NajminIslam from "../../Utility/img/NajminIslam.jpg";
import MohammadSharifUddin from "../../Utility/img/MohammadSharifUddin.jpg";
import NazmulHossain from "../../Utility/img/NazmulHossain.jpg";
import mdalamin from "../../Utility/img/mdalamin.jpg";
import HeadTitle from "../../hooks/HeadTitle";

function APayment() {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="p-10">
      <HeadTitle title={"Admin - Payment Manage"} />
      <div>
        <div className="bg-white rounded-3xl p-8 custom-border custom-shadow">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>User</th>
                  <th>
                    <select className="select select-bordered select-sm w-full max-w-xs">
                      <option disabled defaultValue>
                        Course
                      </option>
                      <option value={"user"}>Web Development</option>
                      <option value={"admin"}>Digital Markting</option>
                    </select>
                  </th>
                  <th>TRNX ID</th>
                  <th>Paid Amount</th>
                  <th>
                    <select className="select select-bordered select-sm w-full max-w-xs">
                      <option disabled defaultValue>
                        Month
                      </option>
                      <option value={"Junary"}>Junary</option>
                      <option value={"Feb"}>Feb</option>
                      <option value={"March"}>March</option>
                      <option value={"April"}>April</option>
                      <option value={"May"}>May</option>
                      <option value={"Jun"}>Jun</option>
                      <option value={"July"}>July</option>
                    </select>
                  </th>
                  <th>
                    <select className="select select-bordered select-sm w-full max-w-xs">
                      <option disabled defaultValue>
                        Payment Method
                      </option>
                      <option value={"user"}>Bikash</option>
                      <option value={"admin"}>Roket</option>
                      <option value={"admin"}>Bank</option>
                      <option value={"admin"}>Nagat</option>
                    </select>
                  </th>
                  <th>
                    <select className="select select-bordered select-sm w-full max-w-xs">
                      <option disabled defaultValue>
                        Action
                      </option>
                      <option value={"user"}>Approve </option>
                      <option value={"admin"}>Wrong info</option>
                    </select>
                  </th>
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
                          <img src={hossainahmed} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hossain Ahmed</div>
                        <div className="text-sm opacity-50">
                          <button
                            onClick={() => copyText("123456")}
                            className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                            data-tip="Click to Copy"
                          >
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
                    <button
                      onClick={() => copyText("B4S6F5B1231DFB65RE44")}
                      className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                      data-tip="Click to Copy"
                    >
                      B4S6F5B1231DFB65RE44
                      <VscCopy />
                    </button>
                  </td>
                  <td>Tk 1,000</td>

                  <td>Feb</td>
                  <td>Bikash</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-success btn-xs">
                        Approve
                      </button>
                      <button className="btn btn-error btn-xs">
                        Wrong info
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={MdShahnewasRony} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Md Shahnewas Rony</div>
                        <div className="text-sm opacity-50">
                          <button
                            onClick={() => copyText("123456")}
                            className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                            data-tip="Click to Copy"
                          >
                            125125
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
                    <button
                      onClick={() => copyText("B4S6F5B1231DFB65RE44")}
                      className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                      data-tip="Click to Copy"
                    >
                      B4S6F5B1231DFB65RE44
                      <VscCopy />
                    </button>
                  </td>
                  <td>Tk 1,000</td>

                  <td>Feb</td>
                  <td>Bikash</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-success btn-xs">
                        Approve
                      </button>
                      <button className="btn btn-error btn-xs">
                        Wrong info
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={alaminalhasan} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Al Amin Hasan</div>
                        <div className="text-sm opacity-50">
                          <button
                            onClick={() => copyText("123456")}
                            className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                            data-tip="Click to Copy"
                          >
                            125128
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
                    <button
                      onClick={() => copyText("B4S6F5B1231DFB65RE44")}
                      className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                      data-tip="Click to Copy"
                    >
                      B4S6F5B1231DFB65RE44
                      <VscCopy />
                    </button>
                  </td>
                  <td>Tk 1,000</td>

                  <td>Feb</td>
                  <td>Bikash</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-success btn-xs">
                        Approve
                      </button>
                      <button className="btn btn-error btn-xs">
                        Wrong info
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={MohammadIbrahim} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Mohammad Ibrahim</div>
                        <div className="text-sm opacity-50">
                          <button
                            onClick={() => copyText("123456")}
                            className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                            data-tip="Click to Copy"
                          >
                            125139
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
                    <button
                      onClick={() => copyText("B4S6F5B1231DFB65RE44")}
                      className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                      data-tip="Click to Copy"
                    >
                      B4S6F5B1231DFB65RE44
                      <VscCopy />
                    </button>
                  </td>
                  <td>Tk 1,000</td>

                  <td>Feb</td>
                  <td>Bikash</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-success btn-xs">
                        Approve
                      </button>
                      <button className="btn btn-error btn-xs">
                        Wrong info
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={NajminIslam} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Najmin Islam</div>
                        <div className="text-sm opacity-50">
                          <button
                            onClick={() => copyText("123456")}
                            className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                            data-tip="Click to Copy"
                          >
                            125138
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
                    <button
                      onClick={() => copyText("B4S6F5B1231DFB65RE44")}
                      className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                      data-tip="Click to Copy"
                    >
                      B4S6F5B1231DFB65RE44
                      <VscCopy />
                    </button>
                  </td>
                  <td>Tk 1,000</td>

                  <td>Feb</td>
                  <td>Bikash</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-success btn-xs">
                        Approve
                      </button>
                      <button className="btn btn-error btn-xs">
                        Wrong info
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>6</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={MohammadSharifUddin} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Mohammad SharifUddin</div>
                        <div className="text-sm opacity-50">
                          <button
                            onClick={() => copyText("123456")}
                            className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                            data-tip="Click to Copy"
                          >
                            125134
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
                    <button
                      onClick={() => copyText("B4S6F5B1231DFB65RE44")}
                      className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                      data-tip="Click to Copy"
                    >
                      B4S6F5B1231DFB65RE44
                      <VscCopy />
                    </button>
                  </td>
                  <td>Tk 1,000</td>

                  <td>Feb</td>
                  <td>Bikash</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-success btn-xs">
                        Approve
                      </button>
                      <button className="btn btn-error btn-xs">
                        Wrong info
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>7</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={NazmulHossain} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Nazmul Hossain</div>
                        <div className="text-sm opacity-50">
                          <button
                            onClick={() => copyText("123456")}
                            className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                            data-tip="Click to Copy"
                          >
                            125134
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
                    <button
                      onClick={() => copyText("B4S6F5B1231DFB65RE44")}
                      className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                      data-tip="Click to Copy"
                    >
                      B4S6F5B1231DFB65RE44
                      <VscCopy />
                    </button>
                  </td>
                  <td>Tk 1,000</td>

                  <td>Feb</td>
                  <td>Bikash</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-success btn-xs">
                        Approve
                      </button>
                      <button className="btn btn-error btn-xs">
                        Wrong info
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>8</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={mdalamin} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Md Alamin</div>
                        <div className="text-sm opacity-50">
                          <button
                            onClick={() => copyText("123456")}
                            className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                            data-tip="Click to Copy"
                          >
                            125131
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
                    <button
                      onClick={() => copyText("B4S6F5B1231DFB65RE44")}
                      className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-bottom"
                      data-tip="Click to Copy"
                    >
                      B4S6F5B1231DFB65RE44
                      <VscCopy />
                    </button>
                  </td>
                  <td>Tk 1,000</td>

                  <td>Feb</td>
                  <td>Bikash</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-success btn-xs">
                        Approve
                      </button>
                      <button className="btn btn-error btn-xs">
                        Wrong info
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>User</th>
                  <th>Course</th>
                  <th>TRNX ID</th>
                  <th>Paid Amount</th>
                  <th>Month</th>
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
