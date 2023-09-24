import { gql } from "@apollo/client";
import { getClient } from "@/client";
import { Lesson } from "@/types/payload-types";
import TonConnectUIProviderWrapper from "@/components/wrappers/TonConnectUIProviderWrapper";
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
// await getClient().mutate({mutation:})
  console.log("data", data.Lessons.docs);

  return (
    <div className="mt-[90px]">
      <TonConnectWalletWrapper />
    </div>
  );
}
