export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import { ILessons } from "@/app/page";
import { getClient } from "@/client";
import FormControlComponent from "@/components/FormControComponent/FormControlComponent";
import RichTextSerialize from "@/components/RichTextSerialize";
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
        lessonContent
        tests {
          question
          answers {
            answer
            correctAnswer
            id
          }
        }
      }
    }
  }
  
`;

  const { data } = await getClient().query<ILessons>({ query });

  if (data.Lessons.totalDocs < 1) {
    return;
  }
  const { lessonContent, lessonDescription, lessonName, tests } =
    data.Lessons.docs[0];

  return (
    <div className="mt-[90px]">
      {/* <LockedCourseDialog price={lessonPrice} lessonName={lessonName} /> */}

      <div className="px-6">
        <div className="max-w-screen-lg mx-auto text-center">
          <h1 className="text-[40px]">{lessonName}</h1>
          <section className="pt-9">
            <p className="text-[20px]">Lesson description</p>
            <h3 className="text-[24px]">{lessonDescription}</h3>
          </section>
          <section className="text-[20px] pt-10">
            <RichTextSerialize nodes={lessonContent} />
          </section>
          <section className="pt-12">
            <h3 className="text-center text-[20px]">Tests</h3>
            <div className="pt-3">
              {(tests || []).map((i, index) => {
                const { answers, question } = i;
                return (
                  <div key={index} className="">
                    <div>
                      <p>Question:</p>
                      <p>{question}</p>
                    </div>
                    <div className="pt-6">
                      <FormControlComponent answers={answers} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
