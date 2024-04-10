import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lip/meals";
import { notFound } from "next/navigation";

function MealsDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
    // calling this function will stop this component from excuting
    //  ad will show the closest notFound or error page
  }
  meal.instructions = meal?.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image fill alt={meal.title} src={meal.image} />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <mian>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </mian>
    </>
  );
}

export default MealsDetailsPage;
