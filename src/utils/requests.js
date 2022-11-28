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
    const response = await axios.get(`${baseUrl}/loan`, {
      withCredentials: true,
    });

    const { data } = await response.data;

    return data;
  } catch (error) {
    return error.response.data;
  }
}

export async function getLoanTypes() {
  try {
    const response = await axios.get(`${baseUrl}/loan/types`);

    const { data } = await response.data.data;

    return data.loanTypes;
  } catch (error) {
    console.log(error);
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
