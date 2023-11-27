import React from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function FormTable({
  students,
  onDelete,
  onEdit,
  // onSearchTerm,
}) {
  return (
    <div>
      <div className="form-group">
        <input
          style={{margin: 10, width: 1500}}
          placeholder="Tìm tên sinh viên"
          type="text"
          className="form-control"
          // onChange={onSearchTerm}
        />
      </div>
      <div className="table-content">
        <table className="table table-border table-dark">
          <thead>
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>
                {/* <i class="fa-solid fa-gear"></i> */}
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              const { maSV, hoTen, soDienThoai, email } = student;
              return (
                <tr key={maSV}>
                  <th>{maSV}</th>
                  <th>{hoTen}</th>
                  <th>{soDienThoai}</th>
                  <th>{email}</th>
                  <th>
                    <button
                      className="btn btn-success"
                      onClick={() => onEdit(maSV)}
                      style={{ marginRight: 10 }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(maSV)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
