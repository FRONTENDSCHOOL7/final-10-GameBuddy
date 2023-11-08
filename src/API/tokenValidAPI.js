import axios from "axios";

async function tokenValidAPI(setTokenValid) {
  try {
    const token = localStorage.getItem("token");
    const result = await axios.get(`https://api.mandarin.weniv.co.kr/user/checktoken`,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      })

    const { isValid } = await result.data;
    setTokenValid(isValid);

  } catch (error) {
    localStorage.removeItem("token");
    setTokenValid(false);
  }
};

export default tokenValidAPI;