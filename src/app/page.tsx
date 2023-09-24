import { gql } from "@apollo/client";
import { getClient } from "@/client";
import { Lesson } from "@/types/payload-types";
import TonConnectUIProviderWrapper from "@/components/TonConnectUIProvider/TonConnectUIProviderWrapper";

const query = gql`
  query Lessons {
    Lessons {
      docs {
        lessonName
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

  console.log("data", data.Lessons.docs);

  return (
    <div className="mt-[90px]">
      <TonConnectUIProviderWrapper />
    </div>
  );
}
