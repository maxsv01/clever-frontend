import { gql } from "@apollo/client";
import { getClient } from "@/client";
import { Lesson } from "@/types/payload-types";
import HelloComponent from "@/components/HelloComponent";
import LessonsList from "@/components/LessonsList";

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

interface ILessons {
  Lessons: {
    docs: Lesson[];
  };
}

export default async function Home() {
  const { data } = await getClient().query<ILessons>({ query });

  return (
    <div className="mt-[90px]">
      {/* <TonConnectUIProviderWrapper /> */}
      <div className="px-6">
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
