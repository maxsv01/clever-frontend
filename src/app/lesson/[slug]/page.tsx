export default function LessonPage({ params }: { params: { slug: string } }) {
  return <div className="mt-[90px]">{params.slug}</div>;
}
