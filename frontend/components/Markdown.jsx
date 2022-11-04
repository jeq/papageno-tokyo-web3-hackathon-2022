export default function Markdown(props) {
  return (
    <article className="prose lg:prose-xl">
      <h1>{props.storyTitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.storyBody }} />
    </article>
  );
}
