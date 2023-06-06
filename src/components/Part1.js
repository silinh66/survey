import Divider from "./Divider";

function Part1({ next }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{ width: "1176px", margin: "5px" }}>
        <span
          style={{
            backgroundColor: "#E31D93",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            color: "white",
            padding: "8px 12px",
            fontSize: "24px",
            alignItems: "center",
            marginBottom: 0,
            marginLeft: 0,
          }}
        >
          Phần 1 / 3
        </span>
        <div
          style={{
            border: "solid 2px #E31D93",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            borderTopRightRadius: "16px",
            borderTopWidth: "10px",
            marginTop: 0,
            padding: "10px",
            marginBottom: "20px",
          }}
          className="whiteBackground"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
            }}
            className="title"
          >
            <span>
              <div style={{ flex: 1 }}>
                <span style={{ color: "#E31D93" }}>Khảo sát danh sác</span>h
                đăng ký nguyện vọng
              </div>
            </span>
            <Divider />
          </div>

          <p style={{ fontSize: "20px", marginTop: "12px" }}>
            Mình là sinh viên của trường Đại học Bách Khoa Hà Nội (HUST) và mình
            đang xây dựng một sản phẩm giúp hỗ trợ đưa ra quyết định đăng ký
            nguyện vọng Đại học cho các bạn học sinh cuối cấp THPT. <br />
            ---
            <br />
            Mình sẽ cam kết với các bạn rằng các thông tin trong form này sẽ chỉ
            được sử dụng để phục vụ cho việc xây dựng trải nghiệm người dùng mà
            không hề phục vụ cho bất kỳ mục đích cá nhân hay mua bán nào đâu ^^.{" "}
            <br />
            Nên các bạn cứ yên tâm đi nhé hihi.
          </p>
        </div>
        <button
          style={{
            width: "133px",
            padding: "16px 12px",
            backgroundColor: "#E31D93",
            borderRadius: "4px",
            borderColor: "#E31D93",
            color: "white",
            borderWidth: 0,
            cursor: "pointer",
            fontSize: "24px",
            fontWeight: "500",
          }}
          onClick={() => {
            next(1);
          }}
        >
          Tiếp theo
        </button>
      </div>
    </div>
  );
}

export default Part1;
