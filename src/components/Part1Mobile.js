import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Select, { components } from "react-select";
import { listAcademic } from "../constants/listAcademic";
import { listPersonality } from "../constants/listPersonaliy";
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
function Part1Mobile({
  nextMobile,
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
}) {
  return (
    <div style={styles.container}>
      <span style={styles.title}>Thông tin chung</span>
      <span style={styles.inputTitle}>Họ tên</span>
      {/* <input
        style={styles.input}
        placeholder="Nguyễn Văn A"
        value={name}
        onChange={(inputValue) => {
          onChangeName(inputValue);
        }}
      /> */}
      <input
        className="input"
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
        placeholder="VD: Nguyễn Văn A"
        value={name}
        onChange={onChangeName}
      />
      <span style={styles.inputTitle}>Học lực</span>
      <Select
        isSearchable={false}
        className="select-react"
        // defaultValue={4}
        value={academic}
        onChange={(inputValue) => {
          onChangeAcademic(inputValue);
        }}
        options={listAcademic.map((item) => ({
          value: item,
          label: item,
        }))}
        theme={(theme) => ({
          ...theme,
          borderRadius: "4px",
          colors: {
            ...theme.colors,
            // primary25: "white",
            // primary: "white",
          },
        })}
        placeholder={<div className="select-placeholder-text">VD: Giỏi</div>}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
        }}
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
      {/* <div style={styles.picker}>
        <Picker
          selectedValue={grade}
          onValueChange={(itemValue) => setGrade(itemValue)}
        >
          <Picker.Item label="Xuất sắc" value="Xuất sắc" />
          <Picker.Item label="Giỏi" value="Giỏi" />
          <Picker.Item label="Khá" value="Khá" />
          <Picker.Item label="Trung bình" value="Trung bình" />
          <Picker.Item label="Yếu" value="Yếu" />
        </Picker>
      </div> */}

      <span style={styles.inputTitle}>Tính cách</span>
      <span style={styles.instruction}>
        Bạn có thể tìm hiểu qua{" "}
        <span style={styles.link}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.16personalities.com/free-personality-test"
            style={{ color: "#E31D93" }}
          >
            đây
          </a>
        </span>
      </span>
      {/* <input
        className="input"
        // style={styles.input}
        style={{
          // padding: "8px",
          padding: "3px 10px",
          // marginRight: "20px",
          width: "95%",
          alignItems: "center",
          height: "44px",
          borderRadius: "4px",
          // fontStyle: "italic",
          fontSize: "20px",
          fontWeight: "400",
          color: "#E31D93",
        }}
        placeholder="ENFP-T"
        value={personality}
        onChange={(inputValue) => {
          onChangePersonality(inputValue);
        }}
      /> */}
      <Select
        className="select-react"
        // defaultValue={4}
        value={personality}
        onChange={(inputValue) => {
          onChangePersonality(inputValue);
        }}
        options={listPersonality.map((item) => ({
          value: item,
          label: item,
        }))}
        theme={(theme) => ({
          ...theme,
          borderRadius: "4px",
          colors: {
            ...theme.colors,
            // primary25: "white",
            // primary: "white",
          },
        })}
        placeholder={<div className="select-placeholder-text">VD: ENFP-T</div>}
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
      <div
        disabled={!(!!name && !!academic && !!personality)}
        color="#D5D5D5"
        style={{
          backgroundColor:
            !!name && !!academic && !!personality ? "#E31D93" : "#D5D5D5",
          borderRadius: 22,
          height: 44,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "24px",
        }}
        onClick={() => {
          if (!!name && !!academic && !!personality) nextMobile(1);
        }}
      >
        <span style={{ color: "#ffffff", fontWeight: "600", fontSize: 14 }}>
          Tiếp theo
        </span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    // paddingHorizontal: 20,
    padding: "0 20px",
    backgroundColor: "#F7F7F7",
    paddingBottom: "20px",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  inputTitle: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 8,
    marginTop: "8px",
  },
  input: {
    width: "100%",
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
    fontWeight: "500",
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

export default Part1Mobile;
