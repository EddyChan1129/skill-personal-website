import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#15191d",
          color: "#e9ecee",
          fontFamily: "Georgia, serif",
          fontSize: 37,
          fontWeight: 600,
          letterSpacing: -5,
        }}
      >
        E<span style={{ color: "#78a3d0" }}>C</span>
      </div>
    ),
    size,
  );
}
