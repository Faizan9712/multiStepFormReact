import React from "react";

const OtherInfo = ({ formData, setFormData }) => {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality"
        value={formData.nationality}
        onChange={(event) =>
          setFormData({ ...formData, nationality: event.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="Age"
        value={formData.age}
        onChange={(event) =>
          setFormData({ ...formData, age: event.target.value })
        }
      ></input>
    </div>
  );
};

export default OtherInfo;
