import FiveStar from "@/icons/selectIcons/FiveStar";
import FourStart from "@/icons/selectIcons/FourStart";
import ThreeStar from "@/icons/selectIcons/ThreeStar";
import TwoStar from "@/icons/selectIcons/TwoStar";
import OneStart from "@/icons/selectIcons/OneStart";
import ThreeLike from "@/icons/selectIcons/ThreeLike";
import TwoLike from "@/icons/selectIcons/TwoLike";
import OneLike from "@/icons/selectIcons/OneLike";
import Best from "@/icons/selectIcons/Best";


const selectDataType = [
    {
      name: "هتل",
      value: "hotel",
      icon: "",
    },
    {
      name: "ویلا",
      value: "villa",
      icon: "",
    },
    {
      name: "آپارتمان",
      value: "apartment",
      icon: "",
    },
  ];
  
  const selectDataRange = [
    {
      name: "پنج ستاره",
      value: "5",
      icon: <FiveStar />,
    },
    {
      name: "چهار ستاره",
      value: "ِ4",
      icon: <FourStart />,
    },
    {
      name: "سه ستاره",
      value: "3",
      icon: <ThreeStar />,
    },
    {
      name: "دو ستاره",
      value: "2",
      icon: <TwoStar />,
    },
    {
      name: "یک ستاره",
      value: "1",
      icon: <OneStart />,
    },
    {
      name: "درجه سه",
      value: "three",
      icon: <ThreeLike />,
    },
    {
      name: "درجه دو",
      value: "two",
      icon: <TwoLike />,
    },
    {
      name: "درجه یک",
      value: "one",
      icon: <OneLike />,
    },
    {
      name: "ممتاز ",
      value: "best",
      icon: <Best />,
    },
  ];


  export {selectDataType , selectDataRange}