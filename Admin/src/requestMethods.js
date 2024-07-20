import axios from "axios";
const BASE_URL="http://localhost:8800/api/v1/";
export const url="http://localhost:8800/api/v1/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTI2Nzc2ZGMyNTQ0ZDVkZmIxZjhmYyIsImlhdCI6MTcyMDg3MTAzOSwiZXhwIjoxNzIxNzM1MDM5fQ.MUAvIDz0cUWs4uqqYxG0Zc8rr09m4LOrzKUv9JaEpsQ";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
