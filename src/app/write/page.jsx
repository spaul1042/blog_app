"use client";

import React, { useState } from "react";
import styles from "./writepage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
// import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Writepage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const {status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  // if (status === "authenticated") {
  //   router.push("/");
  // }

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addbutton}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addbutton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addbutton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}

        <ReactQuill
          className={styles.textarea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        ></ReactQuill>
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default Writepage;
