import React from "react";

function Part3Mobile({ backMobile, doneMobile, isDone }) {
  return (
    <div
      style={{
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        padding: "20px 20px",
      }}
    >
      <div
        style={{
          fontWeight: "700",
          fontSize: "20px",
          color: "#E31D93",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        Thành công
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "##FFECF9",
        }}
      >
        <img
          alt="success"
          style={{
            width: "96px",
            height: "96px",
            backgroundColor: "##FFECF9",
            borderRadius: "50%",
            border: "1px solid ##FFECF9",
          }}
          src={require("../images/Ellipse 88.png")}
        />
      </div>

      <div
        style={{
          fontWeight: "400",
          fontSize: "14px",
          color: "#6B686A",
          textAlign: "center",
          marginTop: "24px",
        }}
      >
        Cảm ơn bạn vì đã điền hết cái mớ thông tin
      </div>
      <div
        style={{
          fontWeight: "400",
          fontSize: "14px",
          color: "#6B686A",
          textAlign: "center",
        }}
      >
        ở trên giúp mình nha hehe..
      </div>
      {!isDone && (
        <div
          color="#D5D5D5"
          style={{
            backgroundColor: "#E31D93",
            borderRadius: 22,
            height: 44,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "24px",
          }}
          onClick={() => {
            doneMobile();
          }}
        >
          <span style={{ color: "#ffffff", fontWeight: "600", fontSize: 14 }}>
            Ố kề
          </span>
        </div>
      )}
      <div
        color="#D5D5D5"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 22,
          border: "1px solid #E31D93",
          height: 44,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "24px",
        }}
        onClick={() => backMobile(3)}
      >
        <span style={{ color: "#E31D93", fontWeight: "600", fontSize: 14 }}>
          Quay lại
        </span>
      </div>
    </div>
  );
}

export default Part3Mobile;
