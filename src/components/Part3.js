import { useState } from "react";
import Divider from "./Divider";

function Part3({ back, send, isDone }) {
  console.log("isDone: ", isDone);
  const [offset, setOffset] = useState(0);

  function handleMouseOver(event) {
    let backBtn = document.getElementsByClassName("backBtn")[0];
    let positionX = backBtn.getBoundingClientRect().x;
    let positionOriginSendBtn = positionX + 140;
    let mouseX = event.clientX;
    let screenWidth = window.innerWidth;
    const a = mouseX - 150 - positionOriginSendBtn; // example value
    const b = mouseX + 150 - positionOriginSendBtn + 150; // example value
    const maxWidth = screenWidth - positionOriginSendBtn - 150;
    let randomNum;

    do {
      randomNum = Math.floor(Math.random() * (maxWidth + 300)) - 300;
    } while (randomNum >= a && randomNum <= b);
    setOffset(randomNum);
  }

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
          Phần 3 / 3
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
                <span style={{ color: "#E31D93" }}>Lời cả</span>m ơn
              </div>
            </span>
            <Divider />
          </div>
          <p style={{ fontSize: "20px" }}>
            Cảm ơn các bạn rất nhiều vì đã điền hết cái mớ khảo sát này của mình
            nhé. Các bạn đã giúp mình rất nhiều đó... :3
            <br />
            Chúc bạn một ngày mới tốt lành hihi.
          </p>
        </div>
        <button
          className="backBtn"
          style={{
            width: "133px",
            padding: "16px 12px",
            backgroundColor: "#fff",
            borderRadius: "4px",
            borderColor: "#E31D93",
            color: "#E31D93",
            borderWidth: 0,
            cursor: "pointer",
            fontSize: "24px",
            fontWeight: "500",
            marginRight: "16px",
          }}
          tabIndex="-1"
          onClick={() => {
            back(3);
          }}
        >
          Quay lại
        </button>
        {!isDone && (
          <button
            className="sendBtn"
            tabIndex="-1"
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
              transform: `translateX(${offset}px)`,
            }}
            // onMouseOver={handleMouseOver}
            onClick={() => {
              send();
            }}
          >
            Gửi
          </button>
        )}
      </div>
    </div>
  );
}

export default Part3;
