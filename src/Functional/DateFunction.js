// 문자열로된 Date객체 정보를 작성날짜로 변환해주는 함수

export function showDate(dateString) {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();

    return `${year}년 ${month}월 ${day}일`
}

// 댓글 작성 후, 몇분 지났는지 확인
export function fewMinutesAgo(PostDate) {
    const createdAt = new Date(PostDate);
    const today = new Date();

    if (createdAt >= today) return "방금 전";

    // 두 날짜 간의 밀리초 차이 계산
    const differenceInMilliseconds = today - createdAt;

    const seconds = Math.floor(differenceInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const months = Math.floor(days / 30.44);  // 평균적으로 한 달을 30.44일로 계산
    const years = Math.floor(days / 365.25);  // 윤년을 고려하여 365.25일로 계산

    if (years > 0) return `${years}년 전`;
    else if (months > 0) return `${months}달 전`;
    else if (days > 0) return `${days}일 전`;
    else if (hours > 0) return `${hours}시간 전`;
    else if (minutes > 0) return `${minutes}분 전`;
    else return `${seconds}초 전`;

}