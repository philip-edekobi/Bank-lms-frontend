import axios from "axios";

const baseUrl = "/api/v1";

export async function getUsers() {
  try {
    const response = await axios.get(`${baseUrl}/user`);

    const data = await response.data;

    return data;
  } catch (error) {}
}

export async function getLoans() {
  try {
    const response = await axios.get(`${baseUrl}/loan`);

    const data = await response.data;

    return data;
  } catch (error) {}
}

export async function getLoanTypes() {
  try {
    const response = await axios.get(`${baseUrl}/loan/types`);

    const data = await response.data;

    return data.data.loanTypes;
  } catch (error) {
    console.log(error);
  }
}
