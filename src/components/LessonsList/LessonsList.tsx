import { Lesson } from "@/types/payload-types";
import Link from "next/link";
import React, { FC } from "react";

interface ILessonsListProps {
  data: Lesson[];
}

const LessonsList: FC<ILessonsListProps> = ({ data }) => {
  return (
    <section>
      <h3 className="text-center text-[24px]">Select a lesson</h3>
      <div className="mt-6 grid gap-y-6">
        {(data || []).map((i, index) => {
          const {
            slug,
            lessonDescription,
            lessonLevel,
            lessonName,
            lessonPrice,
          } = i;
          return (
            <div key={index} className="bg-white drop-shadow-lg rounded">
              <Link href={`/lesson/${slug}`}>
                <article className="p-5 flex justify-between gap-7 text-black">
                  <div>
                    <h4>{lessonName}</h4>
                    <p>{lessonDescription}</p>
                  </div>
                  <div>
                    <p>Level: {lessonLevel}</p>
                    <p>Lesson price: {lessonPrice} clever points</p>
                  </div>
                </article>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LessonsList;
