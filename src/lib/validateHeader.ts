import CryptoJS from "crypto-js";
import moment from "moment";

// Generate ValidateHeader dynamically per day
export const generateAuthToken = (): string => {
  const currentDate = moment().format("YYYY-MM-DD");
  return CryptoJS.MD5(`Tours@f@q-${currentDate}-T3c4`).toString();
};

// Return header value
export const getValidateHeader = (): string => generateAuthToken();
