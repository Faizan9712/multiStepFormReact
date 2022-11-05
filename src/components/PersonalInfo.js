import React from "react";

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(event) =>
          setFormData({ ...formData, firstName: event.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="User Name"
        value={formData.userName}
        onChange={(event) =>
          setFormData({ ...formData, userName: event.target.value })
        }
      ></input>
    </div>
  );
};

export default PersonalInfo;
