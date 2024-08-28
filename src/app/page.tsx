import CanvasDemo from "@/components/canvas-app";
import ReloadButton from "@/components/reload";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
      <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="font-bold italic">Canvas find the difference</h1>
        <p>틀린 곳을 찾아 클릭하세요</p>
        <div>
          <ReloadButton />
        </div>
      </div>
      <CanvasDemo />
    </main>
  );
}
