"use client";

import { useEffect, useRef, useState } from "react";
import { Separator } from "../ui/separator";
import { toast } from "sonner";

const CanvasDemo = () => {
  const [count, setCount] = useState(1);
  const originCanvasRef = useRef<HTMLCanvasElement>(null);
  const editedCanvasRef = useRef<HTMLCanvasElement>(null);

  const handleOk = () => {
    const canvas = editedCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, 2 * Math.PI);
    ctx.stroke();
    toast.success("정답을 찾았습니다!");
  };

  const handleNotOk = () => {
    setCount((count) => count + 1);
    toast.error(`다시 시도해보세요 시도횟수: ${count}/3`);
  };

  useEffect(() => {
    const canvas = originCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    const canvas = editedCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
    ctx.fill();
  }, []);

  return (
    <div className="flex items-center justify-between w-full">
      <canvas
        ref={originCanvasRef}
        width={600}
        height={800}
        style={{ border: "1px solid black" }}
      />
      <Separator orientation="vertical" className="w-2" />
      <canvas
        ref={editedCanvasRef}
        width={600}
        height={800}
        style={{ border: "1px solid black" }}
        onClick={(e) => {
          if (count > 3) return;
          const canvasWidth = e.currentTarget.width;
          const canvasHeight = e.currentTarget.height;

          const maxClickRange = [1050, 520];
          const minClickRange = [960, 640];

          const offsetX = e.clientX;
          const offsetY = e.clientY;

          if (minClickRange[0] < offsetX && offsetY < minClickRange[1]) {
            handleOk();
            return;
          }

          handleNotOk();
          if (count >= 3) {
            toast("다음 페이지로 넘어갑니다");
          }
        }}
      />
    </div>
  );
};

export default CanvasDemo;
