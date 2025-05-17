export default function NotFoundPage() {
  return (
    <div className="not-found-wrapper">
      <h1 className="not-found-title">404 Not Found</h1>
      <p className="not-found-message">
        유효하지 않은 페이지입니다. 주소를 다시 확인해주세요.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="not-found-button"
      >
        홈으로 돌아가기
      </button>
    </div>
  );
}
