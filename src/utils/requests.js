import axios from "axios";

const baseUrl = "http://localhost:4000/api/v1";

export async function getUsers() {
  try {
    const response = await axios.get(`${baseUrl}/user`);

    const { data } = await response.data;

    return data;
  } catch (error) {
    return error.response.data;
  }
}

export async function getUserDetails() {
  try {
    const response = await axios.get(`${baseUrl}/user/details`, {
      withCredentials: true,
    });

    const { data } = await response.data;

    return data.user;
  } catch (error) {
    return error.response.data;
  }
}

export async function getLoans() {
  try {
    const response = await axios.get(`${baseUrl}/user/loans`, {
      withCredentials: true,
    });

    const { data } = await response.data;

    return data;
  } catch (error) {
    return error.response.data;
  }
}

export async function getLoanType(id) {
  try {
    const response = await axios.get(`${baseUrl}/loan/types/${id}`);

    const { data } = await response.data;

    return data.loan;
  } catch (error) {
    return error.response.data;
  }
}

export async function getLoanTypes() {
  try {
    const response = await axios.get(`${baseUrl}/loan/types`);

    const { data } = await response.data;

    return data.loanTypes;
  } catch (error) {
    return error.response.data;
  }
}

export async function userLogin(acc_num, password) {
  try {
    const response = await axios.post(
      `${baseUrl}/user/login`,
      {
        acc_num: parseInt(acc_num, 10),
        password,
      },
      {
        withCredentials: true,
      }
    );

    const data = await response.data;

    return data;
  } catch (error) {
    return error.response.data;
  }
}

export async function userSignup(fname, lname, email, password, phone) {
  try {
    const response = await axios.post(
      `${baseUrl}/user`,
      {
        fname,
        lname,
        email,
        phone_num: parseInt(phone, 10),
        password,
      },
      {
        withCredentials: true,
      }
    );

    const data = await response.data;

    return data;
  } catch (error) {
    return error.response.data;
  }
}

export async function userUpdate({ ...props }) {
  try {
    const reqObj = {};
    for (let prop in props) {
      console.log(prop, props[prop]);
      if (props[prop]) {
        if (prop === "dob") {
          reqObj[prop] = new Date(props.dob).toJSON();
        } else if (prop === "phone") {
          reqObj["phone_num"] = props["phone"];
        } else if (prop === "addr") {
          reqObj["address"] = props["addr"];
        } else {
          reqObj[prop] = props[prop];
        }
      }
    }

    const response = await axios.patch(
      `${baseUrl}/user/`,
      {
        ...reqObj,
      },
      {
        withCredentials: true,
      }
    );

    const data = await response.data;

    return data;
  } catch (error) {
    return error.response?.data;
  }
}

export async function changeUserPassword(password) {
  try {
    const response = await axios.patch(
      `${baseUrl}/user/password`,
      {
        newPassword: password,
      },
      {
        withCredentials: true,
      }
    );

    const data = await response.data;

    return data;
  } catch (error) {
    return error.response?.data;
  }
}

export async function applyForLoan({ desc, collateral, loanTypeId, dueDate }) {
  try {
    const response = await axios.post(
      `${baseUrl}/loan`,
      {
        desc,
        collateral,
        loanTypeId: parseInt(loanTypeId, 10),
        dueDate: new Date(dueDate).toJSON(),
      },
      {
        withCredentials: true,
      }
    );

    const data = await response.data;

    return data;
  } catch (error) {
    return error.response?.data;
  }
}

export async function payLoan() {
  try {
    const response = await axios.post(
      `${baseUrl}/user/pay`,
      {},
      {
        withCredentials: true,
      }
    );
    const data = await response.data;

    return data;
  } catch (error) {
    return error.response?.data;
  }
}
