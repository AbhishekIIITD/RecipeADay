'use client';
import styles from "./Subscribe.module.scss";
import SubscribeInputBox from "../SubscribeInputBox/SubscribeInputBox";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
import { SubContextProvider } from "../SubscribeContext/SubscribeContext";
export default function Subscribe() {
  return (
    <SubContextProvider>
      <div className={styles.subscribe}>
        <SubscribeInputBox identifier={`subscribe`}/>
        <SubscribeButton inputFieldId={`subscribe`} />
      </div>
    </SubContextProvider>
  )
}
