import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "./Form";
import FormTable from "./FormTable";

export default function FormAdmin() {
  const baseApiStudent = "https://65644be2ceac41c0761dd266.mockapi.io/student";
  const [students, setStudent] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState(searchTerm);

  const timer = useRef();

  const fetchStudent = async () => {
    try {
      const response = await axios.get(baseApiStudent, {
        params: {
          hoTen: searchTerm || undefined,
        },
      });
      setStudent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, [debounceSearchTerm]);

  const handleAdd = async (student) => {
    try {
      const response = await axios.post(baseApiStudent, student);
      fetchStudent(response);
      alert("Thêm sinh viên thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectStudentById = async (id) => {
    try {
      const { data } = await axios.get(`${baseApiStudent}/${id}`);
      setSelectedStudent(data);
      setIsUpdating(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      let response = await axios.delete(`${baseApiStudent}/${id}`);
      fetchStudent(response);
      alert("Xoá sinh viên thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id, student) => {
    try {
      let response = await axios.put(`${baseApiStudent}/${id}`, student);
      fetchStudent(response);
      setIsUpdating(false);
      setSelectedStudent(null);
      alert("Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchTerm = (evt) => {
    setSearchTerm(evt.target.value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setDebounceSearchTerm(evt.target.value);
    }, 200);
  };

  return (
    <div>
      <Form
        students={selectedStudent}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        isUpdating={isUpdating}
      />
      <br />
      <div className="form-group">
        <input
          style={{margin: 10, width: 1500}}
          placeholder="Tìm tên sinh viên"
          type="text"
          className="form-control"
          onChange={handleSearchTerm}
          value={searchTerm}
        />
      </div>
      <FormTable
        students={students}
        onDelete={handleDelete}
        onEdit={handleSelectStudentById}
        onSearchTerm={handleSearchTerm}
      />
    </div>
  );
}
