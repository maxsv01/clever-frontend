
import { gql } from "@apollo/client";
import {getClient} from '@/client'
import { Lesson } from "@/types/payload-types";

const query = gql`query Lessons {
  Lessons {
    docs {
      lessonName
    }
  }
}`;

interface ILessons{
  Lessons: {
    docs: Lesson[]
  }
}

export default async function Home() {
  const { data } = await getClient().query<ILessons>({ query });

  console.log('data', data.Lessons.docs);
  
  return (
    <main className="flex-[1_0_auto]">
        test
    </main>
  )
}
