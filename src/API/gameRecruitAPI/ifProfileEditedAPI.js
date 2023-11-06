import axios from "axios";
import masterTokenAPI from "../masterTokenAPI";
import gameRecruitEditAPI from "./gameRecruitEditAPI";

async function ifProfileEditedAPI(prevMyAccountName, newMyAccountName) {
  const token = await masterTokenAPI();
  try {
      const res = await axios.get(`https://api.mandarin.weniv.co.kr/product/gamerecruitmaster`, {
          headers: {
              "Authorization": `Bearer ${token}`
          }
      })
      const response = await res.data.product

      await response.forEach( async (data) => {
        let isChange = 0;
        const itemName = JSON.parse(data.itemName);
        const link = JSON.parse(data.link);

        if(itemName[1] === prevMyAccountName) {
          itemName[1] = newMyAccountName;
          isChange++;
        }
        // let targetIndex = link[2].indexOf(prevMyAccountName);
        // if (targetIndex !== -1) {
        //   link[2][targetIndex] = newMyAccountName;
        //   isChange++;
        // }
        if (Array.isArray(link[2]) && link[2].indexOf(prevMyAccountName) !== -1) {
          const targetIndex = link[2].indexOf(prevMyAccountName);
          link[2][targetIndex] = newMyAccountName;
          isChange++;
        }

        // console.log("데이터!!!!!!:",data)

        if(isChange !== 0) {
          await gameRecruitEditAPI(
            data.id, 
            { ...data, itemName: JSON.stringify(itemName), link: JSON.stringify(link) }, // 수정된 itemName과 link
            itemName[0], 
            link[0], 
            link[1], 
            data.itemImage
          )
        }
        return data;
      });

      // console.log("프로필이 변경됨에 따라 각 모집글 내부의 유저 계정명도 변경되었습니다!", response);
      console.log("프로필이 변경됨에 따라 각 모집글 내부의 유저 계정명도 변경되었습니다!");
      return response;
  } catch (e) {
      console.log("에러발생 계정명이 변경되지 않았다", e);
      return [];
  }
}

export default ifProfileEditedAPI;
