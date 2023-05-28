'use server';

import { deleteApp, initializeApp } from 'firebase/app';
import { getStorage, ref, uploadString } from 'firebase/storage';
import { v4 as uuid } from 'uuid';

const initializeFirebaseApp = () => {
  return initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  });
};

export const uploadPicture = async (picture: string): Promise<string> => {
  const app = initializeFirebaseApp();

  const uid: string = uuid();

  const storage = getStorage(app);
  const storageRef = ref(storage, uid);

  await uploadString(storageRef, picture, 'data_url');

  deleteApp(app);
  return `https://storage.googleapis.com/gocafe-tw.appspot.com/${uid}`;
};

export const uploadPictures = async (
  pictureList: string[]
): Promise<string[]> => {
  const pictureUrlList = [];

  const app = initializeFirebaseApp();
  const storage = getStorage(app);

  pictureList.map(async (picture) => {
    const uid = uuid();
    const storageRef = ref(storage, uid);

    await uploadString(storageRef, picture, 'data_url');

    pictureUrlList.push(
      `https://storage.googleapis.com/gocafe-tw.appspot.com/${uid}`
    );
  });

  return pictureUrlList;
};
