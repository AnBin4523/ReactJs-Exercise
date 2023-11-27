import { useState, useEffect } from "react";
import "./Style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Form({ students, onAdd, onUpdate, isUpdating }) {
  const infoStudent = {
    maSV: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
  };
  const [values, setValues] = useState(infoStudent);
  const [error, setError] = useState(infoStudent);

  const resetForm = () => {
    setValues({ ...infoStudent });
    setError({ ...infoStudent });
  };

  useEffect(() => {
    if (!students) {
      return;
    } else {
      setValues(students);
    }
  }, [students]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let isValid = true;

    for (let key in values) {
      const bool = validateField(key, values[key]);
      isValid = isValid && bool;
    }

    if (!isValid) {
      return;
    }

    if (isUpdating) {
      onUpdate(values.maSV, values);
      resetForm();
    } else {
      onAdd(values);
      resetForm();
    }

    // console.log(values);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (evt) => {
    const { name, value } = evt.target;
    validateField(name, value);
  };

  const validateField = (fieldName, fieldValue) => {
    const formErrors = {};
    let isValid = true;

    switch (fieldName) {
      case "maSV": {
        if (fieldValue.trim() === "") {
          formErrors.maSV = "Mã sinh viên không được để trống";
          isValid = false;
        } else {
          formErrors.maSV = "";
        }
        break;
      }

      case "hoTen": {
        if (fieldValue.trim() === "") {
          formErrors.hoTen = "Họ tên không được để trống";
          isValid = false;
        } else {
          formErrors.hoTen = "";
        }
        break;
      }

      case "soDienThoai": {
        if (fieldValue.trim() === "") {
          formErrors.soDienThoai = "Số điện thoại không được để trống";
          isValid = false;
        } else {
          formErrors.soDienThoai = "";
        }
        break;
      }

      case "email": {
        if (fieldValue.trim() === "") {
          formErrors.email = "Email không được để trống";
          isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue)) {
          formErrors.email = "Email phải đúng định dạng";
          isValid = false;
        } else {
          formErrors.email = "";
        }
        break;
      }

      default:
        break;
    }

    setError((currentValues) => {
      return { ...currentValues, ...formErrors };
    });

    return isValid;
  };

  return (
    <div>
      <div className="form-header">
        <h3>Student Information</h3>
      </div>
      <div className="form-input" style={{ padding: 10 }}>
        <form action="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="maSV">
                  Mã SV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="maSV"
                  name="maSV"
                  value={values.maSV}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {error.maSV && (
                  <span className="text-danger">{error.maSV}</span>
                )}
              </div>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="soDienThoai">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="soDienThoai"
                  name="soDienThoai"
                  value={values.soDienThoai}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {error.soDienThoai && (
                  <span className="text-danger">{error.soDienThoai}</span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="hoTen">
                  Họ tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="hoTen"
                  name="hoTen"
                  value={values.hoTen}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {error.hoTen && (
                  <span className="text-danger">{error.hoTen}</span>
                )}
              </div>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {error.email && (
                  <span className="text-danger">{error.email}</span>
                )}
              </div>
            </div>
          </div>
          {isUpdating ? (
            <button className="btn btn-primary">Update</button>
          ) : (
            <button className="btn btn-success">Thêm sinh viên</button>
          )}
        </form>
      </div>
    </div>
  );
}
