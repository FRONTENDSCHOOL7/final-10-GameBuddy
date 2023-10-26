import React from "react";
import Header from "../Components/Commons/Header/Header";
import ChattingList from "../Components/Chat/ChattingList";

function ChattingListPage() {
  return (
    <>
      <Header type={"chat"} />
      <ChattingList />
    </>
  );
}

export default ChattingListPage;
