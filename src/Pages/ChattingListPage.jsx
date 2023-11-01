import React from "react";
import Header from "../Components/Commons/Header/Header";
import Footer from "../Components/Commons/Footer/Footer";
import ChattingList from "../Components/Chat/ChattingList";

function ChattingListPage() {
  return (
    <>
      <Header type={"chat"} />
      <ChattingList />
      <Footer />
    </>
  );
}

export default ChattingListPage;
