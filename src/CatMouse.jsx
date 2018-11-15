import React from "react";

export default function CatMouse(props) {
  return (
    <span
      style={{
        position: "absolute",
        left: props.mouseX,
        top: props.mouseY
      }}
    >
      <img src="https://66.media.tumblr.com/avatar_3083fea35bee_128.pnj" />
    </span>
  );
}
