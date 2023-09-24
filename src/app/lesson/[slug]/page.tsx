export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import { ILessons } from "@/app/page";
import { getClient } from "@/client";
import LockedCourseDialog from "@/components/LockedCourseDialog/LockedCourseDialog";
import { gql } from "@apollo/client";

export default async function LessonPage({
  params,
}: {
  params: { slug: string };
}) {
  const query = gql`
  query Lessons {
    Lessons(where: {slug: {equals: "${params.slug}"}} ) {
      totalDocs
      docs {
        lessonName
        slug
        lessonDescription
        lessonPrice
        lessonLevel
      }
    }
  }
  
`;

  const { data } = await getClient().query<ILessons>({ query });

  if (data.Lessons.totalDocs < 1) {
    return;
  }
  const {
    lessonPrice,
    lessonContent,
    lessonDescription,
    lessonLevel,
    lessonName,
    tests,
  } = data.Lessons.docs[0];

  return (
    <div className="mt-[90px]">
      <LockedCourseDialog price={lessonPrice} lessonName={lessonName} />
    </div>
  );
}
