import { gql } from "@apollo/client";
import { getClient } from "@/client";
import { Lesson } from "@/types/payload-types";
import TonConnectWalletWrapper from "@/components/wrappers/TonConnectWalletWrapper";

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
      {/* <TonConnectUIProviderWrapper /> */}
      <div className="px-6">
        <div className="mx-auto max-w-screen-lg"></div>
      </div>
      <TonConnectWalletWrapper />
    </div>
  );
}
