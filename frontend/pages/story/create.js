import dynamic from "next/dynamic";
const Editor = dynamic(import("../../components/editor/Index"), {
  ssr: false,
});

export default function CreateStory() {
  return (
    <div className="container mx-auto">
      <Editor />
    </div>
  );
}
