import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const page = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/image2.jpg" fill={true} className={styles.img} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/image2.jpg" fill={true} className={styles.img} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/image2.jpg" fill={true} className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default page;
