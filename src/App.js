import { useEffect, useState } from "react";
import "./App.css";
import Part1 from "./components/Part1";
import background from "./images/background.png";
import banner from "./images/banner.png";
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { apiUrl } from "./constants/api";
import Part1Mobile from "./components/Part1Mobile";
import Part2Mobile from "./components/Part2Mobile";
import Part3Mobile from "./components/Part3Mobile";

function App() {
  const [part, setPart] = useState(1);
  const [partMobile, setPartMobile] = useState(1);
  const [name, setName] = useState("");
  const [academic, setAcademic] = useState("");
  const [personality, setPersonality] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [listAspiration, setListAspiration] = useState([
    { university: "", major: "", block: "", isLike: "" },
    { university: "", major: "", block: "", isLike: "" },
  ]);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1190;

  const next = (curPart) => {
    setPart(curPart + 1);
  };
  const back = (curPart) => {
    setPart(curPart - 1);
  };
  const nextMobile = (curPart) => {
    setPartMobile(curPart + 1);
  };
  const backMobile = (curPart) => {
    setPartMobile(curPart - 1);
  };
  const doneMobile = () => {
    setIsDone(true);
  };
  const sendMobile = () => {
    console.log("name: ", name);
    console.log("academic: ", academic);
    console.log("personality: ", personality);
    console.log("listAspiration: ", listAspiration);

    axios
      .post(`${apiUrl}/survey/add`, {
        data: {
          name: name,
          academic: academic.value,
          personality: personality.value,
          listAspiration: listAspiration.map((item) => {
            return {
              university: item.university,
              major: item.major,
              block: item.block,
              isLike: item.isLike.value,
            };
          }),
        },
      })
      .then((res) => {
        console.log(res);
        toast.success(
          `Cảm ơn bạn đã điền hết cái mớ khảo sát này của mình nhé ❤️`,
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
        setName("");
        setAcademic("");
        setPersonality("");
        setListAspiration([
          { university: "", major: "", block: "", isLike: "" },
          { university: "", major: "", block: "", isLike: "" },
        ]);
      });
  };
  const send = () => {
    console.log("name: ", name);
    console.log("academic: ", academic);
    console.log("personality: ", personality);
    console.log("listAspiration: ", listAspiration);

    axios
      .post(`${apiUrl}/survey/add`, {
        data: {
          name: name,
          academic: academic.value,
          personality: personality.value,
          listAspiration: listAspiration.map((item) => {
            return {
              university: item.university,
              major: item.major,
              block: item.block,
              isLike: item.isLike.value,
            };
          }),
        },
      })
      .then((res) => {
        console.log(res);
        toast.success(
          `Cảm ơn bạn đã điền hết cái mớ khảo sát này của mình nhé ❤️`,
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
        setIsDone(true);
        setName("");
        setAcademic("");
        setPersonality("");
        setListAspiration([
          { university: "", major: "", block: "", isLike: "" },
          { university: "", major: "", block: "", isLike: "" },
        ]);
      });
  };
  const addAspiration = () => {
    setListAspiration([
      ...listAspiration,
      { university: "", major: "", block: "", isLike: "" },
    ]);
  };
  const removeAspiration = (index) => {
    setListAspiration(listAspiration.filter((item, i) => i !== index));
  };
  const updateAspiration = (index, key, value) => {
    const newList = [...listAspiration];
    newList[index][key] = value;
    setListAspiration(newList);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeAcademic = (inputString) => {
    setAcademic(inputString);
  };
  const onChangePersonality = (inputString) => {
    setPersonality(inputString);
  };

  return isMobile ? (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <div
        style={{
          width: "100%",
          height: "135px",
          fontSize: "18px",
          fontWeight: "600",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",

          background:
            "linear-gradient(90.24deg, rgba(25, 211, 197, 0.12) 4.63%, rgba(255, 106, 212, 0.12) 95.78%)",
        }}
      >
        Khảo sát thông tin
      </div>
      {partMobile !== 3 && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "24px 20px",
          }}
        >
          <div
            style={{
              ...styles.crossBar,
              backgroundColor: "#E31D93",
              marginRight: "4px",
            }}
          ></div>
          <div
            style={{
              ...styles.crossBar,
              backgroundColor: partMobile === 1 ? "#D5D5D5" : "#E31D93",
              marginLeft: "4px",
            }}
          ></div>
        </div>
      )}
      {partMobile === 1 && (
        <Part1Mobile
          nextMobile={nextMobile}
          listAspiration={listAspiration}
          addAspiration={addAspiration}
          removeAspiration={removeAspiration}
          updateAspiration={updateAspiration}
          name={name}
          academic={academic}
          personality={personality}
          onChangeName={onChangeName}
          onChangeAcademic={onChangeAcademic}
          onChangePersonality={onChangePersonality}
        />
      )}
      {partMobile === 2 && (
        <Part2Mobile
          nextMobile={nextMobile}
          backMobile={backMobile}
          listAspiration={listAspiration}
          addAspiration={addAspiration}
          removeAspiration={removeAspiration}
          updateAspiration={updateAspiration}
          name={name}
          academic={academic}
          personality={personality}
          onChangeName={onChangeName}
          onChangeAcademic={onChangeAcademic}
          onChangePersonality={onChangePersonality}
          send={sendMobile}
        />
      )}
      {partMobile === 3 && (
        <Part3Mobile
          backMobile={backMobile}
          send={send}
          isDone={isDone}
          doneMobile={doneMobile}
        />
      )}
    </div>
  ) : (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffecf9",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
      }}
    >
      <img alt="banner" style={{ margin: 20 }} src={banner} />
      {part === 1 && <Part1 next={next} />}
      {part === 2 && (
        <Part2
          next={next}
          back={back}
          listAspiration={listAspiration}
          addAspiration={addAspiration}
          removeAspiration={removeAspiration}
          updateAspiration={updateAspiration}
          name={name}
          academic={academic}
          personality={personality}
          onChangeName={onChangeName}
          onChangeAcademic={onChangeAcademic}
          onChangePersonality={onChangePersonality}
        />
      )}
      {part === 3 && <Part3 back={back} send={send} isDone={isDone} />}
      <ToastContainer />
    </div>
  );
}

const styles = {
  crossBar: {
    width: "50%",
    height: 7,
    borderRadius: 7,
  },
};

export default App;
