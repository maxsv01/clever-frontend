import {gql} from "@apollo/client";
import {Lesson} from "@/types/payload-types";
import {getClient} from "@/client";


const queryWithQuestions = gql`
        query Lessons {
          Lessons {
            docs {
              lessonName
              slug
              lessonDescription
              lessonPrice
              lessonLevel
              tests {
                id
                question
                answers {
                  correctAnswer
                  answer
                }
              }
            }
          }
        }
    `;

interface ILessons {
    Lessons: {
        docs: Lesson[];
    };
}

export default async function Quiz() {
    // @ts-ignore
    const { data } = await getClient().query<ILessons>({ queryWithQuestions });
    console.log(data.Lessons.docs[0].tests);

    return {

    }

}

