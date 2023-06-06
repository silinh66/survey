import React, { useEffect, useRef, useState } from "react";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon
          icon={props.selectProps.menuIsOpen ? faCaretUp : faCaretDown}
          style={{ color: "#E31D93" }}
        />
      </components.DropdownIndicator>
    )
  );
};

const Aspiration = ({
  item,
  index,
  removeAspiration,
  updateAspiration,
  setIsKeyboardOpen,
}) => {
  return (
    <>
      <div style={styles.row}>
        <span style={styles.inputTitle}>
          Nguyện vọng {index + 1}
          <span style={{ color: "red" }}>*</span>
        </span>
        <div
          onClick={() => {
            removeAspiration(index);
          }}
        >
          <span style={styles.delete}>Xoá</span>
        </div>
      </div>
      <span style={styles.inputTitle}>Tên trường đại học</span>
      <input
        className="input"
        onFocus={(e) => {
          setIsKeyboardOpen(true);
        }}
        onBlur={(e) => {
          setIsKeyboardOpen(false);
        }}
        style={{
          padding: "8px 10px",
          width: "100% !important",
          alignItems: "center",
          height: "32px",
          borderRadius: "4px",
          // fontStyle: "italic",
          fontSize: "20px",
          fontWeight: "400",
          color: "#E31D93",
        }}
        placeholder="VD: Đại học Bách Khoa Hà Nội"
        value={item.university}
        onChange={(e) => {
          updateAspiration(index, "university", e.target.value);
        }}
      />
      <span style={styles.inputTitle}>Tên ngành</span>
      <input
        className="input"
        onFocus={(e) => {
          setIsKeyboardOpen(true);
        }}
        onBlur={(e) => {
          setIsKeyboardOpen(false);
        }}
        style={{
          padding: "8px 10px",
          width: "100% !important",
          alignItems: "center",
          height: "32px",
          borderRadius: "4px",
          // fontStyle: "italic",
          fontSize: "20px",
          fontWeight: "400",
          color: "#E31D93",
        }}
        placeholder="VD: Khoa học máy tính"
        value={item.major}
        onChange={(e) => {
          updateAspiration(index, "major", e.target.value);
        }}
      />
      <span style={styles.inputTitle}>Khối thi</span>
      <input
        className="input"
        onFocus={(e) => {
          setIsKeyboardOpen(true);
        }}
        onBlur={(e) => {
          setIsKeyboardOpen(false);
        }}
        style={{
          padding: "8px 10px",
          width: "100% !important",
          alignItems: "center",
          height: "32px",
          borderRadius: "4px",
          // fontStyle: "italic",
          fontSize: "20px",
          fontWeight: "400",
          color: "#E31D93",
        }}
        placeholder="VD: A00"
        value={item.block}
        onChange={(e) => {
          updateAspiration(index, "block", e.target.value);
        }}
      />
      <span style={styles.inputTitle}>Sở thích</span>
      <div style={styles.picker}>
        <Select
          className="select-react"
          onFocus={(e) => {
            setIsKeyboardOpen(true);
          }}
          onBlur={(e) => {
            setIsKeyboardOpen(false);
          }}
          value={item.isLike}
          onChange={(inputValue) => {
            updateAspiration(index, "isLike", inputValue);
          }}
          options={[
            { value: 4, label: "Rất thích" },
            { value: 3, label: "Thích" },
            { value: 2, label: "Bình thường" },
            { value: 1, label: "Không thích" },
          ]}
          theme={(theme) => ({
            ...theme,
            borderRadius: "4px",
            colors: {
              ...theme.colors,
              // primary25: "white",
              // primary: "white",
            },
          })}
          placeholder={
            <div className="select-placeholder-text">VD: Rất thích</div>
          }
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator,
          }}
          isSearchable={false}
          styles={{
            control: (styles) => ({
              ...styles,

              width: "100%",
              height: "50px",
              backgroundColor: "#FFFAFE",

              border: "1px solid #E31D93",
              boxShadow: "0 !important",
              "&:hover": {
                border: "1px solid #E31D93 !important",
                boxShadow: "0 0 10px #e31d93",
              },
            }),
            menu: (base) => ({
              ...base,
              fontSize: "20px",
              fontWeight: "400",
              background: "rgba(255, 236, 249, 0.3)",
              backdropFilter: `blur(7px)`,
              textAlign: "center",
              hover: {
                background: "red",
              },
            }),
            menuList: (base) => ({
              ...base,
              // kill the white space on first and last option
              padding: 0,
            }),
            input: (base) => ({
              ...base,
              color: "#e31d93",
              fontSize: "20px",
              fontWeight: "400",
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              svg: {
                fill: "#E31D93",
              },
            }),
            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
              return {
                ...styles,
                backgroundColor: isSelected
                  ? "rgba(255, 236, 249, 0.3)"
                  : isFocused
                  ? "rgba(255, 236, 249, 0.3)"
                  : null,
                color: "#E31D93",
                cursor: isDisabled ? "not-allowed" : "default",
              };
            },

            singleValue: (base) => ({
              ...base,
              // padding: "5px 10px",
              borderRadius: 5,
              background: "#FFFAFE",
              color: "#E31D93",
              display: "flex",
              width: "fit-content",
              fontSize: "20px",
              fontWeight: "400",
            }),
          }}
        />
        {/* <Picker
          style={{ backgroundColor: "transparent" }}
          selectedValue={hobby}
          onValueChange={(value) => handleUpdate("hobby", value)}
        >
          <Picker.Item label="Rất thích" value="4" />
          <Picker.Item label="Thích" value="3" />
          <Picker.Item label="Bình thường" value="2" />
          <Picker.Item label="Không thích" value="1" />
        </Picker> */}
      </div>
    </>
  );
};

function Part2Mobile({
  nextMobile,
  backMobile,
  listAspiration,
  addAspiration,
  removeAspiration,
  updateAspiration,
  name,
  academic,
  personality,
  onChangeName,
  onChangeAcademic,
  onChangePersonality,
  send,
}) {
  const prevListAspirationRef = useRef();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  useEffect(() => {
    //scroll to bottom smooth
    if (
      !!prevListAspirationRef.current &&
      listAspiration.length > prevListAspirationRef.current.length
    )
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    prevListAspirationRef.current = listAspiration;
  }, [listAspiration]);
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <span style={styles.title}>Danh sách nguyện vọng</span>
      </div>
      {listAspiration.map((item, index) => (
        <Aspiration
          key={index}
          index={index}
          item={item}
          removeAspiration={removeAspiration}
          updateAspiration={updateAspiration}
          setIsKeyboardOpen={setIsKeyboardOpen}
        />
      ))}
      {!isKeyboardOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "#F7F7F7",
            position: "fixed",
            bottom: 0,
            left: 0,
            padding: "20px 0",
            // justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={addAspiration}
          >
            <span style={styles.link}>+ Thêm nguyện vọng</span>
          </div>
          <div
            color="#D5D5D5"
            style={{
              backgroundColor:
                listAspiration.filter((element) => {
                  return Object.values(element).some(
                    (x) => x === null || x === ""
                  );
                }).length === 0
                  ? "#E31D93"
                  : "#D5D5D5",
              borderRadius: 22,
              height: 44,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "24px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
            onClick={() => {
              if (
                listAspiration.filter((element) => {
                  return Object.values(element).some(
                    (x) => x === null || x === ""
                  );
                }).length === 0
              ) {
                nextMobile(2);
                send();
              }
            }}
          >
            <span style={{ color: "#ffffff", fontWeight: "600", fontSize: 14 }}>
              Xác nhận
            </span>
          </div>
          <div
            disabled={!(!!name && !!academic && !!personality)}
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
              marginLeft: "20px",
              marginRight: "20px",
            }}
            onClick={() => backMobile(2)}
          >
            <span style={{ color: "#E31D93", fontWeight: "600", fontSize: 14 }}>
              Quay lại
            </span>
          </div>
        </div>
      )}
      {listAspiration.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "#F7F7F7",
            padding: "20px 0",
            // justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ ...styles.link, color: "#f7f7f7" }}>
              + Thêm nguyện vọng
            </span>
          </div>
          <div
            color="#D5D5D5"
            style={{
              backgroundColor:
                listAspiration.filter((element) => {
                  return Object.values(element).some(
                    (x) => x === null || x === ""
                  );
                }).length === 0
                  ? "#f7f7f7"
                  : "#f7f7f7",
              borderRadius: 22,
              height: 44,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "24px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <span style={{ color: "#f7f7f7", fontWeight: "600", fontSize: 14 }}>
              Xác nhận
            </span>
          </div>
          <div
            disabled={!(!!name && !!academic && !!personality)}
            color="#D5D5D5"
            style={{
              backgroundColor: "#f7f7f7",
              borderRadius: 22,
              border: "1px solid #f7f7f7",
              height: 44,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "24px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <span style={{ color: "#f7f7f7", fontWeight: "600", fontSize: 14 }}>
              Quay lại
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
    backgroundColor: "#F7F7F7",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  inputTitle: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: "6px",
    marginTop: "6px",
  },
  input: {
    borderColor: "#EBEBEB",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },
  picker: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#EBEBEB",
  },
  link: {
    color: "#E31D93",
    fontSize: 14,
    fontWeight: "600",
  },
  delete: {
    color: "#FF2528",
    fontSize: 14,
    fontWeight: "500",
  },
  instruction: {
    color: "#8C8C8C",
    textDecorationLine: "underline",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 8,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "pink",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  crossBar: {
    width: "48%",
    height: 7,
    borderRadius: 7,
  },
};

export default Part2Mobile;
