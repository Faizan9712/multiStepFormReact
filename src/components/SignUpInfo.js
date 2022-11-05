import React from "react";

const SignUpInfo = ({ formData, setFormData }) => {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="Password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      ></input>
    </div>
  );
};

export default SignUpInfo;
