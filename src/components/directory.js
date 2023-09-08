import React, { useState } from "react";
import "./directory.styles.scss";
import Menu from "./menu-item";

const Directory = () => {
  const [data, setData] = useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "",
    },
  ]);

 return (
    <div className="directory-menu">
      {data.map((item,imageUrl, size) => (
        <Menu key={item.id} title={item.title} imageUrl={item.imageUrl} size = {item.size} linkUrl = {item.linkUrl} />
      ))}
    </div>
  );
};

export default Directory;
