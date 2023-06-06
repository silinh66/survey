import Divider from "./Divider";
import plusIcon from "../images/plus.png";
import { useEffect, useRef } from "react";
import { listAcademic } from "../constants/listAcademic";
import { listPersonality } from "../constants/listPersonaliy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
function Part2({
  next,
  back,
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
  const prevListAspirationRef = useRef();
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
          Phần 2 / 3
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
                <span style={{ color: "#E31D93" }}>Thông t</span>
                in chung
              </div>
            </span>
            <Divider />
          </div>
          <div
            style={{
              border: "1px solid #E31D93",
              padding: "12px",
              borderRadius: "12px",
              backgroundColor: "#FFFAFE",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "8px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  color: "#E31D93",
                  fontWeight: "600",
                }}
              >
                Họ tên
              </div>
              <input
                className="input"
                style={{
                  padding: "8px",
                  // width: "514px",
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
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "8px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  color: "#E31D93",
                  fontWeight: "600",
                }}
              >
                Học lực
              </div>
              <Select
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
                placeholder={
                  <div className="select-placeholder-text">VD: Giỏi</div>
                }
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator,
                }}
                isSearchable
                styles={{
                  control: (styles) => ({
                    ...styles,

                    width: "532px",
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
                  option: (
                    styles,
                    { data, isDisabled, isFocused, isSelected }
                  ) => {
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
              {/* <select
                className="input"
                style={{
                  padding: "8px",
                  alignItems: "center",
                  height: "49px",
                  width: "532px",
                  borderRadius: "4px",
                  // fontStyle: "italic",
                  fontSize: "20px",
                  fontWeight: "400",
                  color: academic ? "#E31D93" : "rgba(227, 29, 147, 0.6)",
                }}
                value={academic}
                onChange={onChangeAcademic}
              >
                <option
                  className="placeholderSelect"
                  value=""
                  disabled
                  // selected
                  hidden
                >
                  VD: Giỏi
                </option>
                {listAcademic.map((item, index) => (
                  <option style={{ padding: "8px" }} key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "8px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  color: "#E31D93",
                  fontWeight: "600",
                }}
              >
                Tính cách
              </div>
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
                placeholder={
                  <div className="select-placeholder-text">VD: ENFP-T</div>
                }
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator,
                }}
                isSearchable
                styles={{
                  control: (styles) => ({
                    ...styles,

                    width: "532px",
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
                  option: (
                    styles,
                    { data, isDisabled, isFocused, isSelected }
                  ) => {
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
              {/* <select
                className="input"
                style={{
                  padding: "8px",
                  alignItems: "center",
                  height: "49px",
                  width: "532px",
                  borderRadius: "4px",
                  fontStyle: "italic",
                  fontSize: "20px",
                  fontWeight: "400",
                  color: personality ? "#E31D93" : "rgba(227, 29, 147, 0.6)",
                }}
                value={personality}
                onChange={onChangePersonality}
              >
                <option
                  value=""
                  disabled
                  //  selected
                  hidden
                >
                  VD: ENFP-T
                </option>
                {listPersonality.map((item, index) => (
                  <option
                    style={{ padding: "8px", marginTop: "5px" }}
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select> */}
            </div>
            <span className="personality">
              *Bạn có thể tìm hiểu về nhóm tính cách của bản thân thông qua
              trang web:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.16personalities.com/free-personality-test"
                style={{ color: "#E31D93" }}
              >
                https://www.16personalities.com/free-personality-test
              </a>
            </span>
          </div>
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
                <span style={{ color: "#E31D93" }}>Danh sách</span> nguyện vọng
              </div>
            </span>
            <Divider />
          </div>
          {listAspiration.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  marginBottom: "12px",
                  alignItems: "center",
                  border: "1px solid #E31D93",
                  padding: "12px",
                  borderRadius: "12px",
                  backgroundColor: "#FFFAFE",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      color: "#E31D93",
                    }}
                    className="title"
                  >
                    {index + 1}. Nguyện vọng {index + 1}
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {/* <div className="btnEdit">Chỉnh sửa</div> */}
                    <div
                      className="btnDelete"
                      onClick={() => {
                        removeAspiration(index);
                      }}
                    >
                      Xoá
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      color: "#E31D93",
                      fontWeight: "600",
                    }}
                  >
                    Tên trường đại học
                  </div>
                  <input
                    className="input"
                    style={{
                      padding: "8px",
                      width: "514px",
                      alignItems: "center",
                      height: "32px",
                      borderRadius: "4px",
                      // fontStyle: "italic",
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "#E31D93",
                    }}
                    placeholder="VD: Trường đại học Bách Khoa Hà Nội"
                    value={item.university}
                    onChange={(e) => {
                      updateAspiration(index, "university", e.target.value);
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      color: "#E31D93",
                      fontWeight: "600",
                    }}
                  >
                    Tên ngành
                  </div>
                  <input
                    className="input"
                    style={{
                      padding: "8px",
                      width: "514px",
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
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      color: "#E31D93",
                      fontWeight: "600",
                    }}
                  >
                    Khối
                  </div>
                  <input
                    className="input"
                    style={{
                      padding: "8px",
                      width: "514px",
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
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      color: "#E31D93",
                      fontWeight: "600",
                    }}
                  >
                    Sở thích
                  </div>
                  <Select
                    className="select-react"
                    // defaultValue={4}
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
                      <div className="select-placeholder-text">
                        VD: Rất thích
                      </div>
                    }
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator,
                    }}
                    isSearchable={false}
                    styles={{
                      control: (styles) => ({
                        ...styles,

                        width: "532px",
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
                      option: (
                        styles,
                        { data, isDisabled, isFocused, isSelected }
                      ) => {
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
                  {/* <select
                    className="input"
                    style={{
                      padding: "8px",
                      alignItems: "center",
                      height: "49px",
                      width: "532px",
                      borderRadius: "4px",
                      fontStyle: "italic",
                      fontSize: "20px",
                      fontWeight: "400",
                      color: item.isLike
                        ? "#E31D93"
                        : "rgba(227, 29, 147, 0.6)",
                    }}
                    value={item.isLike}
                    onChange={(e) => {
                      updateAspiration(index, "isLike", e.target.value);
                    }}
                  >
                    <option
                      className="placeholderSelect"
                      value=""
                      disabled
                      // selected
                      hidden
                    >
                      VD: Rất thích
                    </option>
                    <option style={{ padding: "8px" }} value={4}>
                      Rất thích
                    </option>
                    <option style={{ padding: "8px" }} value={3}>
                      Thích
                    </option>
                    <option style={{ padding: "8px" }} value={2}>
                      Trung bình
                    </option>
                    <option style={{ padding: "8px" }} value={1}>
                      Không thích
                    </option>
                  </select> */}
                </div>
              </div>
            );
          })}
          <button className="btnAdd" onClick={addAspiration}>
            Thêm nguyện vọng <img alt="plusIcon" src={plusIcon} />{" "}
          </button>
        </div>
        <button
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
          onClick={() => {
            back(2);
          }}
        >
          Quay lại
        </button>
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
            //validate
            if (name === "") {
              toast.warn("🤗 Vui lòng điền họ tên", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              return;
            }
            if (academic === "") {
              toast.warn("🤗 Vui lòng điền học lực", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              return;
            }
            if (personality === "") {
              toast.warn("🤗 Vui lòng điền tính cách", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              return;
            }
            if (listAspiration.length === 0) {
              toast.warn("🤗 Vui lòng thêm nguyện vọng", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              return;
            }
            for (let i = 0; i < listAspiration.length; i++) {
              const aspiration = listAspiration[i];
              if (aspiration.university === "") {
                toast.warn(
                  `🤗 Vui lòng điền tên trường đại học cho nguyện vọng ${
                    i + 1
                  }`,
                  {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  }
                );
                return;
              }
              if (aspiration.major === "") {
                toast.warn(
                  `🤗 Vui lòng điền ngành học cho nguyện vọng ${i + 1}`,
                  {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  }
                );
                return;
              }
              if (aspiration.block === "") {
                toast.warn(`🤗 Vui lòng điền khối cho nguyện vọng ${i + 1}`, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                return;
              }
              if (aspiration.isLike === "") {
                toast.warn(
                  `🤗 Vui lòng điền sở thích cho nguyện vọng ${i + 1}`,
                  {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  }
                );
                return;
              }
            }
            next(2);
          }}
        >
          Tiếp theo
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Part2;
