export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import { gql } from "@apollo/client";
import { getClient } from "@/client";
import { Lesson } from "@/types/payload-types";
import HelloComponent from "@/components/HelloComponent";
import LessonsList from "@/components/LessonsList";
import TonConnectWalletWrapper from "@/components/wrappers/TonConnectWalletWrapper";
import Quiz from "@/components/Quiz/Quiz";

const query = gql`
  query Lessons {
    Lessons {
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

export interface ILessons {
  Lessons: {
    docs: Lesson[];
    totalDocs: number;
  };
}

export default async function Home() {
  const { data } = await getClient().query<ILessons>({ query });

  // console.log(data.Lessons.docs);
  return (
    <div className="mt-[90px]">
      <div className="flex justify-center items-center">
        <TonConnectWalletWrapper />
      </div>
      <div className="px-6 mt-6">
        <div className="mx-auto max-w-screen-lg">
          <section>
            <HelloComponent />
            <h2 className="text-center mt-4 text-[20px]">
              We are a team of education enthusiasts striving to make the
              learning process bright, engaging, and memorable. On our platform,
              you will find lessons that not only provide you with knowledge but
              also bring joy to the learning process.
            </h2>
          </section>
          <div className="mt-6">
            <LessonsList data={data.Lessons.docs} />
          </div>
        </div>
      </div>
    </div>
  );
}
